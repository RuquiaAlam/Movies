const express = require("express");
const mongo = require("mongodb");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
dotenv.config();
let db;


const MongoClient = mongo.MongoClient;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 8000;

// console.log(process.env);
// const client = new MongoClient();
const MONGO_URL = process.env.MONGO_URL;

// const MONGO_URL = "mongodb://0.0.0.0:27017";
// const MONGO_URL ='mongodb://localhost:27017'


app.get("/", (req, res) => {
  res.send("Hello everyone how r u!!!!!🥳🥳😉😉😉");
});





  

MongoClient.connect(MONGO_URL,(err, client)=>
{
 console.log(" connected to mongo");
 if(err)
 {
  console.log("err connecting client")
 }

  db = client.db("Movies");

 
   
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})


app.get("/list", (req, res)  => {
  const {id}  = req.params;
  db.collection("list").find().toArray((err,result) =>{
    if(err) throw err;
    res.send(result);
  });
});





  app.get("/list/:_id" ,(req,res)=>
  {
    let mongoId =(mongo.ObjectId(req.params._id));
 
  

  
    db.collection("list").find({_id:mongoId}).toArray((err,result) =>
    {
      if(err)
      throw err;
      res.send(result);

    });

  });
  app.get("/data/:id" ,(req,res)=>
  {
    let id =Number(req.params.id);
    db.collection("list").find({id :id}).toArray((err,result) =>
     {
       if(err)
       throw err;
       res.send(result);
   
     });
   
    });

  

