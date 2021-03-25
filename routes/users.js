var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Post = require('../models/post');
var Book = require('../models/book');
const moment = require("moment")
var mongodb = require("mongodb")
var Steps = require('../models/steps');
let Favourites = require('../models/favourites')
const axios = require('axios');
const {google} = require('googleapis')
const request = require('request')
const moment = require("moment")
const urlParse = require('url-parse')
const queryParse = require('query-string')
const bodyParser = require("body-parser")

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

router.get('/',isValidUser, async(req,res,next) => {
  let user = await User.findOne({_id:req.user._id})
  let post = await Post.find().sort({_id:-1}).limit(50)
  res.render('landing',{user, post})
})

router.get('/bot',isValidUser, async function(req,res,next){
  let user = await User.findOne({_id:req.user._id})
  res.render('botto',{user})
})

router.get('/profile/:id',isValidUser, async function(req,res,next){
  let id = req.params.id
  let user = await User.findOne({_id:id})
  let post= await Post.find({userid:id}).sort({_id:-1})
  return res.render('profile',{user, post})
})

router.get('/doctors',isValidUser, async function(req,res,next){
  let user = await User.findOne({_id:req.user._id})
  let doctors = await User.find({type:"doctor"})
  res.render('doctors',{user,doctors})
}) 

router.get('/post',isValidUser, async function(req,res,next){
  let user = await User.findOne({_id:req.user._id})
  res.render('post',{user})
})

router.post('/post', async function(req,res,next){
  var post= new Post({
    username:req.body.username,
    title:req.body.title,
    userid:req.body.userid,
    type: req.body.type,
    date: Date.now()
  });
  try{
    doc=await post.save()
    return res.redirect(`/users`)
    //return res.status(201).json(doc);
  }
  catch(err){
    console.log(err)
    return res.redirect('/users/post')
    //return res.status(501).json(err);
  }
})

router.get('/book',isValidUser, async function(req,res,next){
  let user = await User.findOne({_id:req.user._id})
  let doctors = await User.find({type:"doctor"})
  console.log(doctors[0].iframe)
  res.render('book',{user,doctors, iframe: doctors[0].iframe, doctor: doctors[0]})
})

router.post('/book1',isValidUser, async function(req,res,next){
  let user = await User.findOne({_id:req.user._id})
  let doctors = await User.find({type:"doctor"})
  let doctor = await User.findOne({_id:req.body.doctor})
  console.log(doctor)
  res.render('book',{user,doctors, iframe: doctor.iframe, doctor})
})

router.post('/book', async function(req,res,next){
  let user = await User.findOne({_id:req.user._id})
  let doctor = await User.findOne({_id:req.body.doctor})
  var book= new Book({
    username:req.body.username,
    doctorname:doctor.name,
    userid:req.body.userid,
    doctorid:req.body.doctor,
    time: req.body.time,
    date: req.body.date,
    status:'Pending',
    code:makeid(6)
  });
  try{
    doc=await book.save()
    return res.redirect(`/users/view`)
    //return res.status(201).json(doc);
  }
  catch(err){
    console.log(err)
    return res.redirect('/users/book')
    //return res.status(501).json(err);
  }
})

router.get('/view',isValidUser, async function(req,res,next){
  let user = await User.findOne({_id:req.user._id})
  let appointments=[]
  if (user.type==="doctor"){
     appointments = await Book.find({doctorid:req.user._id}).sort({_id:-1})
  }
  else{
    appointments = await Book.find({userid:req.user._id}).sort({_id:-1})
  }
  
  res.render('view',{user,appointments})
})

router.post('/view',isValidUser, async function(req,res,next){
  await Book.findOneAndUpdate({_id:req.body.id},{status: req.body.status})
  return res.redirect('/users/view')
})

router.get('/join',isValidUser, async function(req,res,next){
  let user = await User.findOne({_id:req.user._id})
  res.render('join',{user})
})

router.get('/recipes',isValidUser, async function(req,res,next){
  let user = await User.findOne({_id:req.user._id})
  return res.render('search',{user})
})

router.post('/recipes',isValidUser, async function(req,res,next){
  let user = await User.findOne({_id:req.user._id})
  var params = { 
    'ingredients': req.body.query,
    'number': 5, 
    'ranking': 1, 
    'ignorePantry': false 
  };
console.log(params)
axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.SPOONACULAR_API_KEY}`,{
  params: params
})
  .then(response => {
    console.log(response)
    let recipes = (response.data);
    res.render("recipe-list",{user,recipes})
  })
  .catch(error => {
    console.log(error);
    res.render("search",{user})
  });

})

router.get('/single/:id',isValidUser, async function(req,res,next){
  let id = req.params.id
  let user = await User.findOne({_id:req.user._id})
axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`)
  .then(response => {
    // let recipes = (response.data.results);
    // res.render("recipe-list",{user,recipes})
    console.log(response)
     let recipe = (response.data);
    res.render("single",{user,recipe})
  })
  .catch(error => {
    console.log(error);
    res.render("search",{user})
  });
})

function isValidUser(req,res,next){
  if(req.isAuthenticated()){
    next()
  }
  else{
    console.log('Unauthorized request')
    res.redirect('/login')
  //return res.status(401).json({message:'Unauthorized Request'});
  }
}



module.exports = router;
