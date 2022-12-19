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