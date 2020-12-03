const express =require('express');
const bodyParser =require('body-parser');
var mongoose=require ("mongoose");
var https = require("https");
const path = require('path');
const  cors = require('cors');
const api= require('./server/routes/api');
const port=3000;

const app= express();

console.log("version mongoose: "+mongoose.version);

//app.use(passport.initialize());
//app.use(passport.session());
app.use(express.static(path.join(__dirname,'dist')));
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.all('/*',function (req, res, next) {
res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTION');
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
next()
});
//where to use express
app.use('/api',api);
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'dist/mean/index.html'));
});

app.listen(port,function(){
  console.log("Server running on localhost:"+ port);
});
