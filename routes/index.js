var express= require("express");
var router=express.Router();
var passport = require("passport");
var User = require("../models/user");
var Content = require("../models/contents");



router.get("/", function(req,res){
    console.log(req.user);
    //res.send("this will be the landing page soon!");
    res.render("landing");

});

//===================
//AUTH ROUTES 
//======================

//SHOW REGISTER FORM

router.get("/register", function(req,res){
    
    res.render("register");
    
    });
    
    router.post("/register", function(req,res){
       //console.log(req.body.username);
          var newUser= new User({username: req.body.username});
          User.register(newUser, req.body.password, function(err, user){
              if(err){
                  console.log(err);
                  return res.render("register");
              }else{
              passport.authenticate("local")(req,res, function(){
                  res.render("landing");
            
              });
          }
          });
            
        });
    //show login form 
    router.get("/login", function (req, res){
    res.render("login"); 
    
    });
    router.post("/login", passport.authenticate("local",
    {successRedirect:"/content",
    failureRedirect:"/login"}),function(req,res){
        //res.send("login logic happens");

});
    
    //logout 
    router.get("/logout", function(req, res){
        req.logout();
        res.redirect("/")
    
    });
     
    
    
    // router.use(function(req,res,next){
    //     res.locals.currentUser
    //     next();
  //  });

module.exports=router;