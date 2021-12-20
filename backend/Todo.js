const {schema , model, Schema} = require("mongoose")

const TodoSchema=new Schema({
    title:String , 
    isCompleted:Boolean
})

const Todo=model("todo" , TodoSchema )
module.exports= Todo