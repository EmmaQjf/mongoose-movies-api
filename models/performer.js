const mongoose = require('mongoose')

// name, born, and credits.
const performerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    birthDate: { type: String, required: true },
    credits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
})

const Performer = mongoose.model('Performer', performerSchema)

module.exports = Performer