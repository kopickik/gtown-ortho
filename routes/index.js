'use strict'

const router = require('express').Router()
const customers = require('./customers')
const apiError = require('./error')

router.get('/', (req, res, next) => {
  res.status(200).json({message: 'Connected'})
})

router.use('/customers', customers)
router.use('/*', apiError)

module.exports = router