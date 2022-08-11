const lodash = require('lodash');
const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const first = require('../logger/logger')
//const second = require('../introduction/util/')cd ..


let arr =["january","february","march","April","may","jun","july","August","september","october","November","December"]
let result= lodash.chunk(arr,3) 
console.log(result)

app.get("/sol2", function(req , res){

})   

router.get('/cohort-member', function (req, res) {
    let students=["bikash",'aman',"hardik","rin2"]
    res.send(students)
})


router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    first.welcome()   // welcome function ko call ker raha hu
    second.printDate() 
    res.send('My second ever api!')
});




router.post('/test-post-4', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason