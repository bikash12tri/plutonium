const mongoose= require("mongoose");

const userSchema = new mongoose.Schema({
    bookName:  String, 
    authorName: String,
    catagory:String,
    tags:[String],
    isPublished:Boolean,
    price: {
        indiaPrice: String, 
        europePrice: String 
    },


    
});
