const mongoose=require ("mongoose");
var db=mongoose.connect("mongodb://localhost:27017/bdd1");
const Schema=mongoose.Schema;

var coursSchema=new Schema({
  title: String,
  caption: String,
  url: String,
  createdAt: Date,
  _teacherId:{
    type: mongoose.Schema.Types.ObjectId,
    require:true
  }

});
module.exports=mongoose.model("courses", coursSchema,);
