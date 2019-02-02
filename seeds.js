
var Content = require("./models/contents");
var User = require("./models/user")
var data = [
    {   name:"javascript1",
        image:"https://www.youtube.com/embed/PkZNo7MFNFg",
        description: "this is test description", 
        text : "you can start our own note "
    },
    {
        name: "javascript2",
        image: "https://www.youtube.com/embed/IEf1KAcK6A8",
        description: "test",
        text : "you can start our own note "
    }
]

function seedDB(){
    //REMOVE all content

Content.remove({},function(err){
    if (err){
    console.log(err)
}else{
    console.log("removed contents!");
// add a few contents
data.forEach(function(seed){
    Content.create(seed, function(err, content){
          if(err){
            console.log(err);
            }else{
                    User
                    console.log("added a content");
                    content.save();
                       }
                   });
                });  
            }
        });
                    // Comment.create(
          }      //     {
                    //     text:"this place is great",
                    //     author : "sue"
                    // }, function(err, comments){
                    //     if(err){
                    //         console.log(err);
                    //     }else{
                    //     campground.comments.push(comments);
                    //     campground.save();
                    //     console.log("created new comment");
                    //    //console.log(campground);
                    // }
                    // });
             
//seedDB same as var seedDB
module.exports =seedDB;