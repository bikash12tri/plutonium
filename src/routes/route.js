const express = require('express')
const router = express.Router();
const userModel = require('../models/userModel.js')
const userController = require('../controllers/userController.js')

router.get('/test-me',function(req,res){
    res.send("My first ever api!")
});  

  router.post('/createUser',userController.createUser)

router.get('/getUserData',async function(req, res){
  let allUser=  userModel.find()
  res.send({msg : allUser})
})
module.exports = router;
// adding this comment for no reason