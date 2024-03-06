const mongoose = require('mongoose')
const dbCongration=async()=>{
    try {

      //  await mongoose.connect('mongodb://localhost:27017/Oline_complaints')
      await mongoose.connect('mongodb+srv://aruweyda45:12345@cluster0.4g4dxej.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Oline_complaints')
       console.log('success fully connected') 
    } catch (error) {
      console.log(error)  
    }
}
module.exports =dbCongration