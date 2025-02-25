let mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/BookStore").then((conc)=>{
    console.log("DataBase Coonected");
})

const BookSchema = mongoose.Schema({
    BookImage:String,
    BookName:String,
    AuthorName:String,
    Cost:Number
})

module.exports = mongoose.model("BookModel",BookSchema);