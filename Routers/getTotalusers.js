const express = require('express')

const route = express.Router()
const handleGetallusers =require('../controlers/getAllusers')

route.get('/total/users',handleGetallusers.handleGetallUsers)

module.exports=route