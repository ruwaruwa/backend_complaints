
const complaintModel=require('../models/complaintsModel')
//get all complaints
const handleGetallcomplaints =async (req, res) => {

   try {
    const totalcomplaints= await  complaintModel.find().countDocuments()
    if(totalcomplaints){
        res.json(totalcomplaints)
    }
    else{
        res.status(400).json({message:"no user found"})
    }
   } catch (error) {
    console.log(error)
   }
  }

  module.exports = {handleGetallcomplaints}