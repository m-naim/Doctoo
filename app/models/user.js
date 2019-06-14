var mongoose = require('mongoose');

let userSchema=new mongoose.Schema(
    {
        lastName: String,
        firstName: String,
        age: String,
        address: String,
        eMail: String,
        number: String,
    }
)

module.exports = mongoose.model('user', userSchema);