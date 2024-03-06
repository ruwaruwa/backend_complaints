const AdminController = require('../controlers/admindacontrole')

const express = require('express')

const router = express.Router()

router.post('/admin/register',AdminController.RegisterAdmin)
//get
router.get('/admin/register/get',AdminController.getAllusers)
router.post('/admin/Login',AdminController.loginAdmin)
router.get('/admin/:id',AdminController.getSingleone)
//update
router.put('/admin/update/:id',AdminController.UpdateData)
//delete
router.delete('/admin/delete/:id',AdminController.dELETEData)

module.exports = router  