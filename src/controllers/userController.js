const userModel = require('../models/userModel')

createUser=async function(req, res){
    let data =req.body
    let savedData=  userModel.create(data)
    res.send({msg : savedData})
}


module.exports.createUser= createUser