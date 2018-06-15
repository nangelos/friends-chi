const router = require('express').Router();
const { Data } = require('../db/models');
module.exports = router;

router.post('/', (req, res, next) => {
  Data.create(req.body)
    .then(data => {
      res.status(201).json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.get('/', (req, res, next) => {
  Data.findAll()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.get('/:id', (req, res, next) => {
  console.log(req.params)
  Data.findById(req.params.id)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

// router.get('/:id', (req, res, next) => {
//   Data.findById(req.header.id)
//     .then(issue => {
//       res.json(issue)
//     })
//     .catch(err => {
//       next(err)
//     })
// })
