const { count, Console } = require("console")
const bookModel= require("../models/bookModel")
const authorModel = require("../models/authorModel")

//--------------------------------------------------1----------------------------------------//
const createBook = async function (req, res) {
    let data = req.body
    let savedData = await bookModel.create(data)
    res.send({msg: savedData})
}
const createAuthor = async function (req, res) {
    let data = req.body
    let savedData = await authorModel.create(data)
    res.send({msg: savedData})
}
//--------------------------------------------------2----------------------------------------//
const getBooks = async function (req, res) {
    let savedData = await authorModel.find({author_name : "Chetan Bhagat"}).select({ _id : 0,author_id :1 })
    
    let innerArray = savedData[0]
    let savedData2 = await bookModel.find(innerArray)
    res.send({msg: savedData2})
}
//--------------------------------------------------3----------------------------------------//

const authorName = async function (req, res) {
    let savedData = await bookModel.findOneAndUpdate(
    { name : "Two states" } , { $set: { price : 100} } , { new : true } ).select({ _id : 0,author_id : 1})
    
    let updatePrice = await bookModel.find({ name : "Two states"}).select({ _id : 0,price :1}) 
    let newPrice = updatePrice[0].price
    let savedData2 = await authorModel.find(savedData).select({ _id :0 ,author_name : 1})
    res.send({msg: savedData2 ,updatedPrice : newPrice})
}
//--------------------------------------------------4----------------------------------------//
const findBooksWithAuthor = async function (req, res) {
    let book = await bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ _id : 0, author_id :1})//.forEach
    
    let temp = []
    for (let i = 0; i < book.length; i++) {
        let y = book[i].author_id
        temp.push(y)
    }
    let authorName = await authorModel.find( {$in : temp} ).select({_id : 0,author_name : 1})
    res.send({msg: authorName})
}


module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.getBooks = getBooks
module.exports.authorName = authorName
module.exports.findBooksWithAuthor = findBooksWithAuthor