const{UserAuth} = require('../module/usermodule');

var userauth = new UserAuth();

exports.loginUser = function(_data) {
    return new Promise((resolve,reject)=>{
        validateData(_data)
        .then((response)=>{
            return userauth.userLogin(_data)
        }).then((response)=>{
            return resolve(response);
        }).catch((error)=>{
            return reject(error);
        });
    });
}

function validateData(data) {
    return new Promise((resolve,reject)=>{
        if(data.username == null) {
            var err_response = { error_code: '400', error_msg: 'Missing  email', error_details: 'Missing  email' };
            return reject(err_response);
        }

        if(data.password == null) {
            var err_response = { error_code: '400', error_msg: 'Missing  password', error_details: 'Missing  password' };
            return reject(err_response);
        }

        return resolve(data);
    });
}
