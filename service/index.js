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




app.use('/auth', require('./app/app'));

module.exports = {
  path: '/',
  handler: app
}

