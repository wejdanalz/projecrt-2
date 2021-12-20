const mongoose=require('mongoose')

const dbURI='mongodb://localhost:27017/TodolistV01'

mongoose.connect(dbURI)
const db=mongoose.connection

db.on("erroe" , (err)=>{
    console.log('ERROR in MongoDB')
});

db.on("connected", (err)=>{
    console.log("MOngoDB is connected .. ")
});
