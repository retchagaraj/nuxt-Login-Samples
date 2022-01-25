const btoa = function (str) { return Buffer.from(str).toString('base64'); }
const config = require('../config/config');

function login_bearer_auth_header() {
    console.log("config ", config);
    var bearerAuth = config.token;
    console.log('BEarer:', bearerAuth)
    var header_param = {
        headers: {
            Authorization: bearerAuth,
            'Content-Type': 'application/json'
        }
    };
    console.log('header_param',header_param);
    return header_param;
}

module.exports = { login_bearer_auth_header }