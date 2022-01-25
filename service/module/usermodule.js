const { loginUser,usersLists,getUser} = require("../dao/api");


class UserAuth {
    userLogin(_data) {
        return new Promise((resolve,reject)=>{
            loginUser(_data)
            .then((response)=>{
                return resolve(response);
            }).catch((error)=>{
                return reject(error);
            });
        });
    }

    getUsers() {
        return new Promise((resolve,reject)=>{
            usersLists()
            .then((response)=>{
                return resolve(response);
            }).catch((error)=>{
                return reject(error);
            });
        });
    }

    getUserbyId(_id) {
        return new Promise((resolve,reject)=>{
            getUser(_id)
            .then((response)=>{
                return resolve(response);
            }).catch((error)=>{
                return reject(error);
            });
        });
    }
}

module.exports = { UserAuth }