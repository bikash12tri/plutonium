const express = require('express');
const logger = require('../logger/logger');
const helper = require('../util/helper');
const formatter = require('../validator/formatter');
const router = express.Router();


router.get('/problem1', function(req, res){
    console.log(logger.welcome())
    res.send('ho gaya')
})

router.get('/problem2', function(req, res){
    console.log(helper.printDate())
    console.log(helper.printMonth())
    console.log(helper.getBatchInfo())
    res.send("phir se hogaya")
})

router.get('/problem3', function(req, res){
    console.log(formatter.triming())
    console.log(formatter.lowerCase())
    console.log(formatter.upperCase())
    res.send("finally khatam hua")
})

module.exports = router;
// adding this comment for no reason