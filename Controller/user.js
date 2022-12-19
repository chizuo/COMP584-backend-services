const userDB = new Map();

exports.create = (data) => {
    return new Promise( (resolve, reject) => {
        if(!userDB.has(data.username)) { 
            userDB.set(data.username, data); 
            resolve(data);
        } else {
            reject(new Error(`${data.username} is taken`));
        }
    });
}

exports.authenticate = (data) => {
    return new Promise( (resolve, reject) => {
        if(userDB.has(data.username)) {
            let response = userDB.get(data.username);
            if(response.password == pw) resolve(data.password);
            else reject(new Error(`${pw} is incorrect`));
        } else {
            reject(new Error(`${user} does not exit`));
        }
    });
}

exports.updateUser = (user, update) => {
    return new Promise( (resolve, reject) => {
        if(userDB.has(user)) {
            let data = userDB.get(user);
            if(update.firstname.length > 0) data.firstname = update.firstname;
            if(update.lastname.length > 0) data.lastname = update.lastname;
            if(update.email.length > 0) data.email = update.email;
            userDB.set(user, data);
            resolve(data);
        } else { reject(new Error (`${user} does not exist`))}
    });
}

exports.updatePassword = (user, pw, newpw) => {
    return new Promise( (resolve, reject) => {
        if(userDB.has(user)) {
            let data = userDB.get(user);
            if(data.password == pw) {
                data.password = newpw;
                userDB.set(user,data);
                resolve(data);
            } else {
                reject(new Error(`${pw} is incorrect`));
            }
        }
    });
}