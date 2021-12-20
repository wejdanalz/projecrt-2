const express=require('express')
const app=express()
const db=require('./db')

const Todo=require('./Todo')
console.log(Todo)


app.get("/" , (req , res) =>{
res.json("get / is working");
})


app.get("/ tasks" , (req , res) =>{
    res.json("get / is working");
    })



app.listen(5000,()=>{
console.log('Server working...');
})
