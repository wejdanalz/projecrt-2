const express=require('express')
const app=express()
const db=require('./db')
app.use(express.json())

const Todo=require('./Todo')
console.log(Todo)


app.get("/" , (req , res) =>{
res.json("get / is working");
})


app.get("/ tasks" , (req , res) =>{
    Todo.find({},(err,data)=> {
        if (err) {
            console.log("Error" , err)
        }else{
        res.json(data);
        }
    });
});

app.post("/ tasks" , (req , res) =>{
    Todo.create({},(err,newtask)=> {
        if (err) {
            console.log("Error" , err)
        }else{
        res.status(201).json("successfully");
        }
    });
});

app.delete("/tasks/:id", (req, res) => {
    // console.log("37:", req.params.id);
  
    Todo.deleteOne({ _id: req.params.id }, (err, deleteObj) => {
      if (err) {
        console.log("ERROR: ", err);
      } else {
        deleteObj.deletedCount === 1
          ? res.json("Delete one todo successfully")
          : res.status(404).json("This todo is not found");
      }
    });
  });
  
  app.put("/tasks/:id", (req, res) => {
    // console.log("37:", req.params.id);
  
    Todo.updateOne(
      { _id: req.params.id },
      { title: req.body.newTitle },
      (err, updateObj) => {
        if (err) {
          console.log("ERROR: ", err);
          res.status(400).json(err)
        } else {
          console.log(updateObj);
          updateObj.modifiedCount === 1
            ? res.json("Update one todo successfully")
            : res.status(404).json("This todo is not found");
        }
      }
    );
  });



app.listen(5000,()=>{
console.log('Server working...');
})
