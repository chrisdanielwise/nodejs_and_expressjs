const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    firstname: {
        type:String,
        requried:true
    },
    lastname: {
        type:String,
        requried:true
    },
})

module.exports = mongoose.model('Employee',employeeSchema)