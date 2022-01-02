require('dotenv').config();
var express = require('express');
var app = express();
console.log("Hello world");
 
/*app.get('/', function(req,res){
  res.send("Hello Express");
}
)
*/

app.get('/',(req,res)=>{
res.sendFile(__dirname +"/views/index.html");
});

/* 
console.log("message");
app.get("/json",(req,res)=>{
  if(process.env.MESSAGE_STYLE == "uppercase"){
  res.json({"message": "HELLO JSON"});
  }
  else{res.json({"message": "Hello json"});}
});
*/
let dataJson = {"message": "Hello json"};
 
app.get("/json", (req, res) => {
 if (process.env.MESSAGE_STYLE === "uppercase") {
   dataJson.message = dataJson.message.toUpperCase();
 };
 
 res.json(dataJson);
})

app.use((req, res, next)=>{
console.log(req.method +" " + req.path + " - " + req.ip);
  next();
});

app.use("/public",express.static(__dirname + "/public"));

































 module.exports = app;
