const express = require('express')
const route=express.Router()
const userControle=require('../controlers/SearchUser')
route.get('/user/search/:key',userControle.searchCOMplaints)

module.exports=route