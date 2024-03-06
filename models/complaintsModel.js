const mongoose = require('mongoose')
const comSchema=mongoose.Schema({
    name:{
        type: String,
required: true,
    },
    email:{
        type: String,
required: true,
    }
    ,password:{
        type: String,
required: true,
    },
    message:{
        type: String,
required: true,
    }
},{timestamp: true})
module.exports=mongoose.model('Complaints',comSchema)