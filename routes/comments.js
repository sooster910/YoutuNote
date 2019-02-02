
var express= require("express");
var router=express.Router();
var Campground = require("../models/contents");
var Comment=require("../models/comment");


//=============================
//COMMENTS ROUTES
//=============================


router.get("/campground/:id/comments", function(req,res){
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        }else{
            res.render("comments/new",{campground:campground});

        }

    });
 

});

router.post("/campground/:id/comments", function(req,res){
    //lookup campground usingID
   Campground.findById(req.params.id, function(err, campground){
    if(err){
        console.log(err);
    }else{
        Comment.findById(req.body.comment, function(err, comment){
            if(err){
                console.log(err);
            }else{
                campground.comments.push(comment);
                campground.save();
                res.redirect('/campground/' + campground._id);
            }

        });
    }

   });
    //create new comment
    //connect new comment to campground
    //redirect campground show page

});

module.exports=router;