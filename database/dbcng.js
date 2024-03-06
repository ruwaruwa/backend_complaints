const mongoose = require('mongoose')
const dbCongration=async()=>{
    try {
       await mongoose.connect('mongodb://localhost:27017/Oline_complaints')
       console.log('success fully connected') 
    } catch (error) {
      console.log(error)  
    }
}
module.exports =dbCongration