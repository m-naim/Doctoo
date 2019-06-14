var mongoose = require('mongoose');

let rdvSchema=new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'

            },
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'doctor'
            },
        date: String,
        hour: String
    }
)


module.exports = mongoose.model('rdv', rdvSchema);