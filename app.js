//import
var express = require("express"),
    app = express(),
    bodyparser = require("body-parser"),
    mongoose=require("mongoose"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    User = require("./models/user"),
    seedDB   = require("./seeds"),
    Content = require("./models/contents"),
    Comment = require("./models/comment")
    
    var server = app.listen(3000,function(){
        console.log("Yelp SERVER has started");
    });

    seedDB();
   //requring routes
var commentRoutes    = require("./routes/comments"),
ContentRoutes = require("./routes/contents"),
indexRoutes      = require("./routes/index")
    


//connect mongoose
mongoose.connect("mongodb://localhost/youtuNote",{useNewUrlParser:true});
app.use(bodyparser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));


//passport configuration
app.use(require("express-session")({
    secret :"once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
   next();
});
//ROUTES CONFIGURATION always after app.use(bodyparser)

app.use("/",indexRoutes);
app.use("/content",ContentRoutes);
app.use(commentRoutes);




