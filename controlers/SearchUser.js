const userModel=require('../models/Adminmodel')
const searchCOMplaints = async(req, res) => {
    
    const SearchData = await userModel.find({
        $or:[
            {username:{$regex: req.params.key}}
        ]
    })
    
    if(SearchData)
     res.send(SearchData)

}
module.exports={searchCOMplaints}