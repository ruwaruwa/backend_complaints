const express = require('express');
const app = express();
app.use(express.json())
const cors=require('cors')
const nodemail=require('nodemailer')
app.use(cors())

const dbCongration=require('./database/dbcng')
dbCongration()
const routes = require('./Routers/ComplaintsRoute')
const admin=require('./Routers/adminRout')
const getAll=require ('./Routers/getAllcomplanRoute')
const getAlusers=require('./Routers/getTotalusers')
//sarchuser
const searchRouteUser=require('./Routers/searchUser')
app.use(searchRouteUser)
app.use(getAlusers)
app.use(getAll)
app.use(admin)
app.use(routes)

app.listen(3000,()=>{
    console.log('app started naw')
})
app.get('/',async(req, res)=>{
    res.send('the server started !')
})




//nodemail waxa loo isticmala sida email loodiro
// let configration
// const tarnsport=nodemail.createTestAccount({
//     service:"gmail",
//     host:"ruwa@getMaxListeners.com",
//     port:587,
//     secure:false,
//     auth:{

//     }
// })

// async function sendemail (){
// const info=await tarnsport.sendemail({
//     from:"",
//     to:"",
//     subject:"",
//     text:"",
// })
// }