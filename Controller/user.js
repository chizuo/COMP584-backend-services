const userDB = new Map();

exports.createUser = (user, data) => {
    return new Promise( (resolve, reject) => {
        if(!userDB.has(user)) { 
            userDB.set(user, data); 
            resolve(data);
        } else {
            reject(new Error(`${user} is taken`));
        }
    });
}

exports.getUser = (user, pw) => {
    return new Promise( (resolve, reject) => {
        if(userDB.has(user)) {
            let data = userDB.get(user);
            if(data.password == pw) resolve(data);
            else reject(new Error(`${pw} is incorrect`));
        } else {
            reject(new Error(`${user} does not exit`));
        }
    });
}