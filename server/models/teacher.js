const mongoose=require ("mongoose");
var db=mongoose.connect("mongodb://localhost:27017/bdd1");
const Schema=mongoose.Schema;

var teacherSchema=new Schema({
  Nom: String,
  Prenom: String,
  Email: String,
  password: String,
  Module :String,

});
module.exports=mongoose.model("teachers", teacherSchema,);
