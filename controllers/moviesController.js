const Movie = require('../models/movie')
const Performer = require('../models/performer')

/*
router.post('/', movieCtrl.create)
router.get('/', movieCtrl.index)
router.get('/:id', movieCtrl.show)
router.get('/:movieId/Performers/:performerId', movieCtrl.addPerformer)
*/

exports.create= async function create(req, res){
    try {
        const createdMovie = await Movie.create(req.body)
        res.status(200).json(createdMovie)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
    
}


exports.index = async function index(req, res) {
    try {
        const foundMovies = await Movie.find({})
        res.status(200).json(foundMovies)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }

}

exports.show = async function index(req, res) {
    try {
        const foundMovie = await Movie.findOne({_id: req.params.id})
        res.status(200).json(foundMovie)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }

}

/*
Associates a performer with a movie. (This will add performer to the movies cast array and the movie to the performers credits array). A frontend using this api endpoint might look something like this with the movie being pre-selected.
router.post('/:movieId/Performers/:performerId', movieCtrl.addPerformer)

exports.addPerformer = async function addPerformer(req, res) {
    try {
        const foundPerformer = await Performer.findOne({ _id: req.params.performerId}) // FIND THE PERFORMER
        if(!foundPerformer) throw new Error(`Cound not find the performer with id ${req.params.performerId}` )
        const foundMovie = await Movie.findOne({ _id: req.params.movieId}) // FIND THE PERFORMER
        if(!foundMovie ) throw new Error('Cound not find the movie' )
        foundMovie.cast.push(foundPerformer._id)
        foundPerformer.credits.push(foundMovie._id)
        await foundMovie.save()
        await foundPerformer.save()
        res.status(200).json({
            msg: `successfully associate performer with id ${req.params.performerId} with movie with id ${req.params.movieId}`,
            movie: foundMovie, 
            performer: foundPerformer

        })

    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
*/

exports.addPerformer = async function addPerformer(req, res) {
    try {
        const foundPerformer = await Performer.findOne({ _id: req.params.performerId })
        if(!foundPerformer) throw new Error(`Could not locate performer with id ${req.params.performerId}`)
        const foundMovie = await Movie.findOne({ _id: req.params.movieId })
        if(!foundMovie) throw new Error(`Could not locate movie with id ${req.params.movieId}`)
        // many to many
        foundMovie.cast.push(foundPerformer._id)
        foundPerformer.credits.push(foundMovie._id)
        await foundMovie.save()
        await foundPerformer.save()
        res.status(200).json({
            msg: `Sucessfully associate performer with id ${req.params.performerId} with movie with id ${req.params.movieId} `,
            movie: foundMovie,
            performer: foundPerformer
        })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}