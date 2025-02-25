const bookmodel = require("../Models/bookmodel");


exports.getbooks = async (req,res)=>{
    try{
        let books = await bookmodel.find({});
        res.status(200)
            .json({
                status : "succes",
                data : books,
            })
    }
    catch(err){
        res.status(400)
            .json({
                status : "Fail",
                data : err.message,
            })
    }
}

exports.createbook = async (req,res)=>{
    try{
        let book = await bookmodel.create(req.body);
        res.status(200)
            .json({
                status : "succes",
                data : book,
            })
    }
    catch(err){
        res.status(400)
            .json({
                status : "Fail",
                data : err.message,
            })
    }
}

exports.deletebook = async (req,res)=>{
    try{
        let book = await bookmodel.findByIdAndDelete(req.params.id);
        res.status(200)
            .json({
                status : "succes",
                data : book,
            })
    }
    catch(err){
        res.status(400)
            .json({
                status : "Fial",
                data : err.message,
            })
    }
}

exports.updatebook = async (req,res)=>{
    try{
        let book = await bookmodel.findByIdAndUpdate(req.params.id,req.body);
        res.status(200)
            .json({
                status : "succes",
                data : book,
            })
    }
    catch(err){
        res.status(400)
            .json({
                status : "Fial",
                data : err.message,
            })
    }
}