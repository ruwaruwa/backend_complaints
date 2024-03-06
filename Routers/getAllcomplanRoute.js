const express = require('express')

const route = express.Router()
const handleGetallcomplaint =require('../controlers/getAllcomplints')

route.get('/total',handleGetallcomplaint.handleGetallcomplaints)

module.exports=route