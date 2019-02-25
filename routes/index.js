var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var Content = require("../models/contents");



router.get("/", function (req, res) {
    console.log(req.user);
    //res.send("this will be the landing page soon!");
    req.flash("error", "Please Login or Signup first!");
    res.render("landing", { currentUser: req.user });
   
});

//===================
//AUTH ROUTES 
//======================

//SHOW REGISTER FORM

router.get("/register", function (req, res) {

    res.render("register");

});

router.post("/register", function (req, res) {
    console.log(req.body.username);
    var newUser = new User({ username: req.body.username });
    User.register(newUser, req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            return res.render("register");
        } else {
            passport.authenticate("local")(req, res, function () {
                res.render("landing");

            });
        }
    });

});
//show login form 
router.get("/login", function (req, res) {
    res.render("login");

});

router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/",
        failureRedirect: "/login"
    }), function (req, res) {

        //res.send("login logic happens");

    });

//logout 
router.get("/logout", function (req, res) {
    req.logout();
    req.flash("success", "Logged you out!");
    res.redirect("/")

});



//not letting a user add comment if the user is not logged in.
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
   
        return next();

    }

    res.redirect("/login");
}

module.exports = router;