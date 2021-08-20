const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const emailSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String
    },
    message: {
        type: String,
        requierd: true
    }
})

const Email = mongoose.model('Email', emailSchema)

module.exports = Email;
