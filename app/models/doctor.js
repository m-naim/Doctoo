var mongoose = require('mongoose');

let doctorSchema=new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        specialty: String,
        photo: String,
        address: String,
        ville: String,
        codePostal: String,
        about: String,
        number: String,
    }
)


module.exports = mongoose.model('doctor', doctorSchema);