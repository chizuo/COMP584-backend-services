const express = require('express');
const routes = require('./routes');
const jwt = require('./utils/jwt');
const cors = require('cors');
const errorHandler = require('./utils/errorHandler');
const server = express();

server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cors());
server.use(jwt());
server.use('/', routes);
server.use(errorHandler);

// Exporting for unit tests rather than running as a process and listening through the port.
module.exports = server;

// Start server only if start via command land, ignores during unit testing.
if(require.main === module) {

    const port = process.env.PORT || 1584;
    server.listen((port), () => {
        console.log(`Service is listening on port: ${port}`);
    });
}