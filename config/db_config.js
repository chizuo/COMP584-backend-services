module.exports = {
  development: {
    username: 'root',
    password: 'root',
    database: 'comp_584_db',
    host: 'localhost',
    port: 3306,
    dialect: 'mariadb'
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mariadb'
  },
  production: {
    username: 'admin',
    password: 'KRv97Gu30hDEgro44P8z',
    database: 'comp_584_db',
    host: 'comp-584-db.czdqbrm9nfoa.us-east-1.rds.amazonaws.com',
    port: 3306,
    dialect: 'mariadb'
  }
};
