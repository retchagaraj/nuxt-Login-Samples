var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json({
  limit: '50mb',
  extended: true
}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));

const{accessToken} = require('../common/auth');

const{loginUser} = require('../action/loginuser');
const{getallUsers,getUser} = require('../action/getusers');

app.post('/login',(req,res)=>{
    var data = req.body;
    console.log('data',data);
    loginUser(data)
    .then((response)=>{
        res.status(200).json(response.data);
    }).catch((error)=>{
        res.status(400).json(error);
    });
});

app.get('/user',accessToken,(req,res)=>{
    getallUsers()
    .then((response)=>{
        res.status(200).json(response.data);
    }).catch((error)=>{
        res.status(400).json(error);
    });
});

app.get('/user/:user_id',accessToken,(req,res)=>{
    var id = req.params.user_id;
    getUser(id)
    .then((response)=>{
        res.status(200).json(response.data);
    }).catch((error)=>{
        res.status(400).json(error);
    });
});

module.exports = app;

