//import
var express = require("express"),
    app = express(),
    PORT=process.env.PORT,
    bodyparser = require("body-parser"),
    mongoose = require("mongoose"),
    flash = require("connect-flash"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    User = require("./models/user"),
    seedDB = require("./seeds"),
    Content = require("./models/contents")

var server = app.listen(PORT, function () {
    console.log("YoutuNote SERVER has started");
});

seedDB();
//requring routes
var ContentRoutes = require("./routes/contents"),
    indexRoutes = require("./routes/index")



//connect mongoose
//mongoose.connect("mongodb://localhost/youtuNote", { useNewUrlParser: true });
mongoose.connect("mongodb+srv://suya9880:Suya2548118@cluster0-i2lfo.mongodb.net/youtuNote", { useNewUrlParser: true });


app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));
app.use(flash());

//passport configuration
app.use(require("express-session")({
    secret: "once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/", indexRoutes);
app.use("/content", ContentRoutes);





