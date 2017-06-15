'use strict'

var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var Customer = require('./models/Customer')
var dbConfig = require('./config/db');

var app = express()

// configure app to use bodyParser()
// this will allow us to get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var port = process.env.PORT || 8080

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


// routes
// for the API
var router = express.Router()

router.use(function(req,res,next) {
  next();// any middleware can go here, for each request
})

router.route('/customers')
  .post(function (req, res, next) {

    var customer = new Customer()
    customer.firstName = req.body.firstName
    customer.lastName = req.body.lastName
    customer.email = req.body.email
    customer.streetAddress = req.body.streetAddress
    customer.phoneNumber = req.body.phoneNumber

    customer.save(function (err) {
      if (err) { res.send(err) }
      res.json({message: 'Customer created!'})
    })
  })
  .get(function(req, res) {
    Customer.find(function (err, customers) {
      if (err) {
        res.send(err)
      }
      res.json(customers)
    })
  })

router.route('/customers/:customer_id')
  .get(function (req, res) {
    Customer.find({
      _id: req.params.customer_id
    }, function (err, customer) {
      if (err) { res.send(err) }
      res.json(customer)
    }, function (customer) {
      console.log(`${customer}`)
    })
  })
  .put(function (req, res, next) {

  })
  .delete(function (req, res, next) {
    Customer.remove({
      _id: req.params.customer_id
    }, function(err, customer) {
      if (err) {
        res.send(err)
      }
      res.json({message: 'Customer deleted.'})
    })
  })

router.get('/', function (req, res, next) {
  res.json({ message: 'Hooray. API is up.' })
})

app.use('/api', router)

app.listen(port)
console.log('Express app listening on port ' + port)

// Base setup (db)
mongoose.connect(dbConfig.url)

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
    res.sendfile('./app/index.html');
});