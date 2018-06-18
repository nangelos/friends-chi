const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/data', require('./data'))
router.use('/children', require('./children'))
router.use('/scoring', require('./scoring'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
