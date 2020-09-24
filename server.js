const express =require('express');
const bodyParser =require('body-parser');
var mongoose=require ("mongoose");
var https = require("https");
const path = require('path');

const api= require('./server/routes/api');
const port=3000;

const app= express();

console.log("version mongoose: "+mongoose.version);

//app.use(passport.initialize());
//app.use(passport.session());
app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//where to use express
app.use('/api',api);
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'dist/mean/index.html'));
});

app.listen(port,function(){
  console.log("Server running on localhost:"+ port);
});
