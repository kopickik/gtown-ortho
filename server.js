'use strict'

const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Customer = require('./models/Customer')
const dbConfig = require('./config/db')
const routes = require('./routes')

const app = express()

// configure app to use bodyParser()
// this will allow us to get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// set view engine
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'pug');

var port = process.env.PORT || 8080

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/api', routes)

app.listen(port)
console.log('Express app listening on port ' + port)

// Base setup (db)
mongoose.connect(dbConfig.url)

app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res) {
  res.sendfile('./app/index.html', {message: message});
});
