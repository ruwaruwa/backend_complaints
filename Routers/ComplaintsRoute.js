const complaintController =require('../controlers/ComplaintsControler')
const express = require('express')
const route=express.Router()

route.post('/complaint/register',complaintController.regesterCompliants)
route.get('/complaint/get',complaintController.getComplaints)
route.get('/complaint/getOne/:id',complaintController.getSingles)
//search
route.get('/complaint/search/:key',complaintController.searchCOMplaints)

//upds
route.put('/complaint/update/:id',complaintController.Updates)
route.delete('/complaint/deletes/:id',complaintController.deleteComplaints)




module.exports=route
