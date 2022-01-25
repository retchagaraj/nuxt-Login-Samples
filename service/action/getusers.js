const{UserAuth} = require('../module/usermodule');

var userauth = new UserAuth();
exports.getallUsers = function() {
    return new Promise((resolve,reject)=>{
        userauth.getUsers()
        .then((response)=>{
            return resolve(response);
        }).catch((error)=>{
            return reject(error);
        });
    });
}

exports.getUser = function(_id) {
    return new Promise((resolve,reject)=>{
        userauth.getUserbyId(_id)
        .then((response)=>{
            return resolve(response);
        }).catch((error)=>{
            return reject(error);
        });
    });
}