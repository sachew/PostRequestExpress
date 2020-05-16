const express = require("express")
const mongoclient = require("mongodb").MongoClient
const bodyparser = require("body-parser")
const app = express()
app.use(bodyparser.json())
app.get("/api/input",(req,res)=>{
    res.send("You tried to post something here")
})
app.post("/api/input",(req,res)=>{
    res.send("You tried to post something here")
    console.log(req.body)
})
app.get("/api/forum",(req,res)=>{
    mongoclient.connect("mongodb://localhost:27017",(err,client)=>{
        var db = client.db("Test1")
        db.collection("Forum",(err,collection)=>{
            collection.find().toArray((err,result)=>{
                if(err){
                    throw err
                }
                res.header('Access-Control-Allow-Origin',"*")
                res.json(result)
            })
        })
    })
})


const port = 3001
app.listen(port)