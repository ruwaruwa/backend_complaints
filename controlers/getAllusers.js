
const UsertModel=require('../models/Adminmodel')
//get all complaints
const handleGetallUsers =async (req, res) => {

   try {
    const totalUsers= await  UsertModel.find().countDocuments()
    if(totalUsers){
        res.json(totalUsers)
    }
    else{
        res.status(400).json({message:"no user found"})
    }
   } catch (error) {
    console.log(error)
   }
  }

  module.exports = {handleGetallUsers}