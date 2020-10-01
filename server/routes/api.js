const express =require('express');
const router = express.Router();
const mongoose=require ("mongoose");
const Teacher =require('../models/teacher');
const Cours =require('../models/cours');
var db=mongoose.connect("mongodb://localhost:27017/bdd1");
//const passport=require('passport');
//const jwt=require('jsonwebtoken');

mongoose.Promise=global.Promise;
//get all teachers
router.all('/*',function (req, res, next) {
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTION');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers','Content-Type,X-Requested-With');
  next();
});
router.get('/teachers',function (req,res) {
  console.log('get request for all vidro');


  Teacher.find({}).exec(function (err,teachers) {
if (err){
  console.log('Error retrieving teachers');
}else {

  res.json(teachers);
}
  });
});



//get all courses of all teachers
router.get('/cours',function (req,res) {
  console.log('get request for all courses');


  Cours.find({}).exec(function (err,courses) {
    if (err){
      console.log('Error retrieving courses');
    }else {

      res.json(courses);

    }
  });
});
router.get('/cours/:courseId',function (req,res) {
  console.log('get cours');


  Cours.find({ _id:req.params.courseId,}).exec(function (err,c) {
    if (err){
      console.log('Error retrieving cours');
    }else {

      res.json(c);

    }
  });
});

//add a teacher
router.post('/teacher',function (req,res) {
console.log('create a teacher');
  var newTeacher= new Teacher();
  newTeacher.Nom =req.body.Nom;
  newTeacher.Prenom =req.body.Prenom;
  newTeacher.Email =req.body.Email;
  newTeacher.password =req.body.password;
  newTeacher.Module =req.body.Module;

  newTeacher.save(function (err,insertedTeacher) {
if(err){
  console.log("error saving video");
}else {
  res.json(insertedTeacher);
}
  });
});
//updat a teacher
router.put('/teacher/:id',function (req,res) {

  console.log('updat a model');
  Teacher.findByIdAndUpdate(req.params.id,{
    $set:{
      Nom:req.body.Nom,
      Prenom:req.body.Prenom,
      Email :req.body.Email,password:req.body.password,
      Module:req.body.Module}
      },
    {
      new:true
    },
    function (err,updatedTeacher) {
 if (err){
   res.send("Error updating teacher");
 }else {
   res.json(updatedTeacher);
 }
    });

});

//get all courses of a teacher
router.get('/teachers/:id/courses',function (req,res) {
  console.log('get courses');


  Cours.find({_teacherId:req.params.id}).exec(function (err,courses) {
    if (err){
      console.log('Error retrieving teachers');
    }else {

      res.json(courses);
    }
  });
});


//add new Couse


router.post('/teachers/:id/courses',function (req,res) {
  console.log('create a cours');
  var newCours= new Cours();
  newCours.title =req.body.title;
  newCours.caption =req.body.caption;
  newCours.url =req.body.url;
  newCours.createdAt=Date.now();
  newCours._teacherId=req.params.id;
  newCours.save(function (err,insertCours) {
    if(err){
      console.log("error saving video");
    }else {
      res.json(insertCours);
    }
  });
});


//update a cours to a teacher
router.patch('/teacher/:id/courses/:courseId',function (req,res) {

  console.log('updat a model');
  Cours.findByIdAndUpdate(req.params.courseId,{
      $set:{

      title:req.body.title,
      caption:req.body.caption,
      url :req.body.url,

       }
    },
    {
      new:true
    },
    function (err,updatedCourse) {
      if (err){
        res.send("Error updating teacher");
      }else {
        res.json(updatedCourse);
      }
    });

});



//delete one cours

router.delete('/teacher/:id/courses/:courseId',function (req,res) {
  console.log("deleting Course");
  Cours.findByIdAndRemove(
    {_id:req.params.courseId,
      _teacherId:req.params.id
    }
    ,function (err,deletedCousre) {
    if (err){
      res.send("error deliting Teacher");

    }else {
      console.log('deleting...');
      res.json(deletedCousre);
    }
  });
});




//get one course
router.get('/teacher/:id/courses/:courseId',function (req,res) {
  console.log('get request for all vidro');


  Cours.find({
      _id:req.params.courseId,
      _teacherId:req.params.id
  }).exec(function (err,Cours) {
    if (err){
      console.log('Error retrieving teachers');
    }else {

      res.json(Cours);
    }
  });
});





router.put('/teacherCourse/:id',function (req,res) {

  console.log('add a course');
  Teacher.findByIdAndUpdate(req.params.id,{
    $push:{
      courses:{
          _id:1,
          title: req.body.title,
          caption: req.body.caption,
          url: req.body.url,
          createdAt: Date.now()
          }
          }},
    {
      new:true,useFindAndModify: false
    },
    function (err,updatedTeacher) {
 if (err){
   res.send("Error updating teacher");
   console.log(res.socket.destroyed);
 }else {
   res.json(updatedTeacher);
 }
    });

});


router.put('/deleteCourse/:id/:createdAt',function (req,res) {
 Teacher.findByIdAndUpdate(req.params.id,{
        instock:{
          courses:{
            createdAt: req.params.createdAt
          }
        }},

    {
   new:true,useFindAndModify: false,multi: true
    },
    function (err,done) {
 if (err){
   res.send("Error updating teacherCourse");
   console.log(res.socket.destroyed);
 }else {
   console.log("woked",req.params._id);
   console.log("woked",req.params.id);
   res.json(done);
 }
    });

});


router.put('/delete/:createdAt',function(req, res) {
  const cursor = Teacher.find({
    instock: {courses: {createdAt: req.params.createdAt} }
  });
});


router.delete('/teacher/:id',function (req,res) {
  console.log("deleting model");
  Teacher.findByIdAndRemove(req.params.id,function (err,deletedTeacher) {
if (err){
  res.send("error deliting Teacher");

}else {
  console.log('deleting...');
  res.json(deletedTeacher);
}
  });
});





module.exports=router;
