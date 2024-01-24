const Performer = require('../models/performer')
/*
router.get('/', performerCtrl.index)
router.post('/', performerCtrl.create)
*/

exports.create = async(req, res) => {
    try {
        const createdPerformer = await Performer.create(req.body)
        res.status(200).json(createdPerformer)
    } catch(error) {
        res.status(400).json({msg: error.message})
    }
}


exports.index = async(req, res) => {
    try {
        const foundPerformers = await Performer.find({})
        res.status(200).json(foundPerformers )
    } catch(error) {
        res.status(400).json({msg: error.message}) 
    } 
}