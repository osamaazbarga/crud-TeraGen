const mongoose=require('mongoose')

const tableSchema=new mongoose.Schema({
    title:{
        type:String,
        // required:true,
        maxlength:255
    },
    text:String,
},{timestamps:true})

module.exports=mongoose.model('Table',tableSchema)