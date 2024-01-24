const express = require('express')
const router = express.Router()
const performerCtrl = require('../controllers/performersController')

// update performer, create performer, show, index, delete, 
// GET /performers: Returns a list of all performers.
// POST /performers: Accepts performer data and creates a new performer.
router.get('/', performerCtrl.index)
router.post('/', performerCtrl.create)

module.exports = router