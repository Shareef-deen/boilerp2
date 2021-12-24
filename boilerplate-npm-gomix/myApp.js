var express = require('express');
var app = express();
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
console.log("Hello world");
/*app.get("/", function(req,res){
res.send("Hello Express");
}
) 
*/
app.get('/',(req,res)=>{
res.sendFile(__dirname +"/views/index.html");
})
app.get("/json",(req,res)=>{
  if(process.env.MESSAGE_STYLE === "uppercase"){
  res.json({"message": "HELLO JSON"});
  }
  else{res.json({"message": "Hello json"});}
});
app.use("/public",express.static(__dirname + "/public"));

































 module.exports = app;
