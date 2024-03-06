const complaintModel=require('../models/complaintsModel')

const regesterCompliants=async(req,res)=>{
    try {
        const newData= await complaintModel(req.body)
        const saveData= newData.save()
        if(saveData){
            res.send(newData)
        }
        
    } catch (error) {
        res.send(error)
    }
}
//get data
const getComplaints = async(req, res)=>{
    try {
        const perpage = req.query.page || 0
        const numberOffComplaints= 5
        const getDatafrom= await complaintModel.find().skip(numberOffComplaints * perpage).limit(numberOffComplaints)
        if(getDatafrom){
            res.send(getDatafrom)
        }
    } catch (error) {
        res.send(error)
    }
}
//gtSingl data
const getSingles = async(req,res)=>{
   try {
    const getsing= await complaintModel.find({_id:req.params.id})
    if(getsing){
        res.send(getsing)
    }
   } catch (error) {
    res.send(error)
   }
}
//update data
// const Update = async(req,res)=>{
//     try {
//         const updateComplints= await complaintModel.updateOne(
//         {
//             _id:req.parabms.id,
//         },
//         {$set:req.body}
//         )
//         if(updateComplints){
//             res.send(updateComplints)
//         }
//     } catch (error) {
//        res.send(error) 
//     }
// }
const Updates = async(req, res) => {
    const updateData = await complaintModel.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    );
    if(updateData){
        res.send(" Updated complaints Succesfully")
    }
}
//dlete on

const deleteComplaints = async(req, res) => {
    const deleteData = await complaintModel.deleteOne(
        {_id: req.params.id}
    );
  
    if(deleteData){
        res.send("Deleted complaints...")
    }
}

// const deleteComplints = async(req,res)=>{
//     try {
//         const deletData= await complaintModel.deleteOne(
//             {_id: req.parabms.id}
//             )
//         if(deletData){
//             res.send(deletData)
//         }
//     } catch (error) {
        
//     }
// }
const searchCOMplaints = async(req, res) => {
    
    const SearchData = await complaintModel.find({
        $or:[
            {name: {$regex: req.params.key}}
        ]
    })
    
    if(SearchData)
     res.send(SearchData)

}
module.exports={
    regesterCompliants,
    getComplaints,
    getSingles,
    Updates,
    // deleteComplints,
    deleteComplaints,
    searchCOMplaints

}