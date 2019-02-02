var express= require("express");
var router=express.Router();
var Content = require("../models/contents");




//INDEX -app.get route shows all contents
router.get("/",function(req,res){
    
    //get all contents from db
    Content.find({},function(err,allContents){
        if(err){
            console.log(err);

        }else{
            res.render("contents/index",{content:allContents})
        }
    });
    //res.render("campground",{campground:campground});
});
 
 

//NEW - show form to create new content with note 
//show the from that will send data to this postroute 
router.get("/new",function(req,res){
   // res.send("this is contents/new");
    res.render("contents/new");
   });

//making logic new content
router.post("/", function(req,res){
   // res.send("you hit post route")
    //get data from form and add to content array
    var name= req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var defaultText = "Start your note ! "
 var newContent={name:name, image:image, description:desc , text:defaultText }
 

    //create a new content and save to db
    Content.create(newContent, function(err,newContent){
        if(err){
            console.log("new");

        }else{  

                   res.redirect('/content');
                }
                    
                });
            });
                          
            

        

//SHOW- shows more info about one video
router.get("/:id", function(req,res){
   
    Content.findById(req.params.id, function(err,foundcontent){
        if(err){
            console.log(err)
        }else{
            console.log(foundcontent);

            //render show template with that content
            res.render("contents/show",{content:foundcontent});

        }


    });
    
});


// click more info  button 
router.get("/:post_id/edit", function(req, res){
    res.send("EDIT ROUTE FOR POST");
  //  res.render("campgorunds/show")
});

 router.put("/:id", function(req,res){
    Content.findByIdAndUpdate(req.params.id, req.body.content, function(err, content){
        if(err){
            console.log(err);
        }else{
            console.log(content) ;  
            res.redirect("/content/" + req.params.id );
            }
            });
        

    });
   
//not letting a user add comment if the user is not logged in.
// function isLoggedIn(req,res, next){
//     if(req.isAuthenticated()){
//         return next();

//     }
//     res.redirect("/login");
// }

module.exports=router;