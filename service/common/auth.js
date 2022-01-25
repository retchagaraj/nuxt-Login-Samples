const config = require('../config/config');

async function accessToken(req, res, next) {
    var token = req.headers.authorization;

    console.log('Headers oAuth Token', req.headers);
    console.log('Stringfy', token);
    try {
        if (token) {
            config.token = token;
            next();
        }

        else {
            var err = {
                error_code: 401,
                error_msg: 'session',
                error_details: 'Access token expire'
            }
            throw err;
        }
    }

    catch (e) {
        console.log('e##',e);
        var err = {
            error_code: 401,
            error_msg: 'session',
            error_details: 'Access token expire'
        }
        throw err;
    }


}

module.exports = {accessToken}