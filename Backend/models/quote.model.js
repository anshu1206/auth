const mongoose = require('mongoose')
const quoteSchema = new mongoose.Schema(
{   quote : {
        type : String,
        required : true
    },
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Signup",
        required : true,
    }
}, {timestamps : true})

const Quote = mongoose.model('Quote', quoteSchema)
module.exports = Quote