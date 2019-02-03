
var Content = require("./models/contents");
var User = require("./models/user")
var data = [
    {   name:"javascript1",
        image:"https://www.youtube.com/embed/PkZNo7MFNFg",
        description: "this is test description", 
        text : "you can start our own note ",
        userId : "588c2e092403d111454fff76",
        
        
    },
    {
        name: "javascript2",
        image: "https://www.youtube.com/embed/IEf1KAcK6A8",
        description: "test",
        text : "you can start our own note ",
        userId : "588c2e092403d111454fff77",
            
        
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
                    
                    console.log("added a content");
                    content.save();
                       }
                   });
                });  
            }
        });
                
          }      
                 
                    
             
//seedDB same as var seedDB
module.exports =seedDB;