var express= require("express");
var router=express.Router();
var Content = require("../models/contents");


//INDEX ROUTE shows all contents
router.get("/", isLoggedIn,function(req,res){
   
    console.log(req.user._id);
    Content.find({userId :req.user._id},function(err,allContents){
        if(err){
           
            console.log(err);

        }else{
            
           res.render("contents/index",{content:allContents, currentUser : req.user})
         
        }
    });
});
    
//NEW - show form to create new content with note 
router.get("/new",isLoggedIn,function(req,res){
   // res.send("this is contents/new");
    res.render("contents/new");
   });

//POST ROUTE 
router.post("/", function(req,res){
   // res.send("you hit post route")
    //get data from form and add to content array
    var name= req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var defaultText = "Start your note ! "
    var userId =req.user._id;
    
    console.log(req.user);
 var newContent={name:name, image:image, description:desc , text:defaultText, userId:userId }
    console.log()

    //create a new content and save to db
    Content.create(newContent, function(err,newContent){
        
        if(err){
            console.log("new");

        }else{  
                    console.log(newContent);
                   res.redirect('/content');
                }
                    
                });
            });
                          
//SHOW ROUTE- shows more info about one video
router.get("/:id", isLoggedIn,function(req,res){
   
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
   
//EDIT VIDEO INFO ROUTE
router.get("/:id/info-edit", function(req,res){
   Content.findById(req.params.id, function(err, foundContent){
    if(err){
        console.log(err)
    }else{
         
    res.render("contents/edit",{content:foundContent});
    }


   })
 
});

router.put("/:id/info-edit", function(req, res){
   
    Content.findByIdAndUpdate(req.params.id, req.body.content, function(err, updatedVideoInfo){
        if(err){
            res.redirect("/content");
        }else{
            res.redirect("/content/"+req.params.id);

        }



    }) 

} )

//DESTROY CONTENT ROUTE
router.delete("/:id", function(req,res){
    Content.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/content");           
        }
        else{
            res.redirect("/content");
        }
    });
   
});

// middle ware - not letting a user add comment if the user is not logged in.
function isLoggedIn(req,res, next){
    if(req.isAuthenticated()){
        return next();

    }
    res.redirect("/login");
}

module.exports=router;