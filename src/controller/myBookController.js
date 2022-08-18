const { find } = require("../models/bookModel")
const BookModel= require("../models/bookModel")
//------------------------------------------------1---------------------------------------------//
const createBook= async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({msg: savedData})
}
//------------------------------------------------2--------------------------------------------//
const booksList = async function (req, res) {
    let findauthor=await UserModel.find({author_name : "chetan Bhagat"});
    let findbook=await BookModel.find({author_name : "chetan Bhagat"});
}
//------------------------------------------------3-------------------------------------------//
const getBooksInYear = async function (req, res) {
    let years = req.params.year
    let allBooks= await BookModel.find({year: { $eq: years}})
    res.send({msg: allBooks})
}
//------------------------------------------------4----------------------------------------------//
const getParticularBooks = async function (req, res) {
    let obj = req.body
    let allBooks= await BookModel.find(meow)
    res.send({msg: allBooks})
}
//------------------------------------------------5---------------------------------------------//
const getXINRBooks = async function (req, res) {
    let allBooks= await BookModel.find({ "prices.indianPrice" : {$in : ["100INR","200INR","500INR"]} })
    res.send({msg: allBooks})
}
//------------------------------------------------6--------------------------------------------//
const getRandomBooks  = async function (req, res) {
    let allBooks= await BookModel.find({$or: [{stockAvailable: true},{totalPages:{$gt: 500}}]})
    res.send({msg: allBooks})
}

module.exports.createBook= createBook
module.exports.booksList= booksList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks