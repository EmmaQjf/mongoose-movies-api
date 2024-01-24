const express = require('express')
const router = express.Router()
const movieCtrl = require('../controllers/moviesController')

router.post('/', movieCtrl.create)
router.get('/', movieCtrl.index)
router.get('/:id', movieCtrl.show)
//POST /movies/:movieId/performers/:performerId: Associates a performer with a movie. (This will add performer to the movies cast array and the movie to the performers credits array). A frontend using this api endpoint might look something like this with the movie being pre-selected.
router.post('/:movieId/Performers/:performerId', movieCtrl.addPerformer)


module.exports = router
