const axios = require('axios');

const {login_bearer_auth_header} = require('../common/headers');

function loginUser(_data) {
    return new Promise((resolve,reject)=>{
        console.log('LOgin url:',`${process.env.HOST_URL}/token`,_data);
        axios.post(`${process.env.HOST_URL}/token`,_data)
        .then((response)=>{
            console.log('REsponse:',response);
            return resolve(response);
        }).catch((error)=>{
            console.log('error:',error);
            return reject(error);
        });
    });
}

function usersLists() {
    return new Promise((resolve,reject)=>{
        console.log('Users url:', axios.get(`${process.env.HOST_URL}/user`,login_bearer_auth_header()));
        axios.get(`${process.env.HOST_URL}/user`,login_bearer_auth_header())
        .then((response)=>{
            console.log('REsponse users',response);
            return resolve(response);
        }).catch((error)=>{
            console.log('REsponse error',error);
            return reject(error);
        });
    });
}

function getUser(_id) {
    return new Promise((resolve,reject)=>{
        console.log('one Users url:', axios.get(`${process.env.HOST_URL}/user/${_id}`,login_bearer_auth_header()));
        axios.get(`${process.env.HOST_URL}/user/${_id}`,login_bearer_auth_header())
        .then((response)=>{
            console.log('REsponse users',response);
            return resolve(response);
        }).catch((error)=>{
            console.log('REsponse error',error);
            return reject(error);
        });
    });
}




module.exports = { loginUser,usersLists,getUser }