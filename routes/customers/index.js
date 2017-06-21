'use strict'

const router = require('express').Router({ mergeParams: true })
const all = require('./all')
const single = require('./single')
const create = require('./create')
const update = require('./update')
const remove = require('./remove')

router.get('/', all)
router.post('/', create)
router.get('/:customerId', single)
router.delete('/:customerId', remove)
router.get('/:customerId/view', single)
router.get('/:customerId/edit', single)
router.put('/:customerId/edit', update)


module.exports = router