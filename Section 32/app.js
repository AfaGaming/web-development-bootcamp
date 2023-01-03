require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require("mongoose-findorcreate")

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

// Initializing Session
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));

// Initializing Passport
app.use(passport.initialize());
app.use(passport.session());

// Connecting to MongoDB using Mongoose
mongoose.set('strictQuery', true);

const mongodb = "mongodb://127.0.0.1:27017/userDB"

mongoose.connect(mongodb, function(err){
    if (err) {
        console.log('Unable to connect to MongoDB');
        console.log(err);
    } else {
        console.log('Successfully connected to MongoDB');
    }
});

// Creating a new User Database
const userSchema = new mongoose.Schema ({
    email: String,
    password: String,
    googleId: String,
    secret: Array
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

// Set Local Login Strategy
passport.use(User.createStrategy());

// Serialize and Deserialize
passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

// Google Authentication Strategy that authenticates users using a Google Account and OAuth 2.0 tokens.
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({username: profile.emails[0].value, googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

// Home Page
app.route("/")
    .get(function(req, res) {
        res.render("home");
    });

// Google Authentication Route
app.get('/auth/google',
  passport.authenticate('google', { scope: ["openid", "profile", "email"] }));

app.get("/auth/google/secrets", 
  passport.authenticate("google", { failureRedirect: "/signin" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/secrets");
});

// Sign-Up Page
app.route("/signup")
    .get(function(req, res) {
        res.render("signup");
    })
    .post(function(req, res) {
        User.register({username: req.body.username}, req.body.password, function(err, user) {
            if (err) {
                console.log(err);
                res.redirect("/signup");
            } else {
                passport.authenticate("local")(req, res, function() {
                    res.redirect("/secrets");
                });
            }
        });
    });

// Sign-In Page
app.route("/signin")
    .get(function(req, res) {
        res.render("signin");
    })
    .post(function(req, res) {
        // Check database to see if the username provided exists in it.
        User.findOne({username: req.body.username}, function(err, foundUser) {
            // If username found, create an object "user" to store username and password which was used for login
            if (foundUser) {
                const user = new User ({
                    username: req.body.username,
                    password: req.body.password
                });
                // Use the "user" object to compare against username and password stored in Database.
                // The code below will either return false is no match was found or it will return the 'found user'.
                passport.authenticate("local", function (err, user) {
                    if (err) {
                        console.log(err);
                    } else {
                        // the 'user' below is the user returned from passport.authenticate callback; it will either be false if no match was found or the user
                        if (user) {
                            // If the user is found, then he/she is logged in or they are redirected to sign in page.
                            req.login(user, function(err) {
                                res.redirect("/secrets");
                            })
                        } else {
                            res.redirect("/signin");
                        }
                    }
                }) (req, res);
            // If no username is found, redirect to sign in page; i.e. user does not exists
            } else {
                res.redirect("/signin");
            }
        });
    });

// Secrets Page
app.route("/secrets")
    .get(function(req, res) {
        if (req.isAuthenticated()) {
            User.find({secret: {$ne: null}}, function(err, users) {
                if (!err) {
                    if (users) {
                        res.render("secrets", {usersWithSecrets: users});
                    } else {
                        console.log(err);
                    }
                } else {
                    console.log(err);
                }
            });
        } else {
            res.redirect("/signin");
        }
    });

// Sign-Out Route
app.route("/signout")
    .get(function(req, res) {
        req.logout(function(err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect("/")
            }
        });
    });

// Submit Route
app.route("/submit")
    .get(function(req, res) {
        if (req.isAuthenticated()) {
            res.render("submit");
        } else {
            res.redirect("/signin");
        }
    })
    .post(function(req, res) {
        const submittedSecret = req.body.secret;
        if(req.isAuthenticated()) {
            req.user.secret.push(submittedSecret);
            req.user.save(function() {
                res.redirect("/secrets");
            })
        } else {
            res.redirect("/signin");
        }
    });


// Delete Route
app.route("/delete")
    .get(function(req, res) {
        if (req.isAuthenticated()) {
            res.render("delete", {secrets: req.user.secret});
        } else {
            res.redirect("/signin");
        }
    })
    .post(function(req, res) {
        // if (req.isAuthenticated()) {
        //     User.findById(req.user.id, function(err, foundUser) {
        //         const userSecretArray = foundUser.secret;
        //         console.log(userSecretArray);
        //         // const deleteRequestedSecret = 
        //         console.log(req.body.value);
        //         // console.log(foundUser.secret.indexOf(req.body.secret));
        //         // foundUser.secret.splice(foundUser.secret.indexOf(req.body.secret), 1);
        //         // foundUser.save(function(err) {
        //         //     if (!err) {
        //         //         res.redirect("/secrets");
        //         //     }
        //         // });
        //     });
        // } else {
        //     res.redirect("/signin");
        // }
        if(req.isAuthenticated()){
            User.findById(req.user.id, function (err,foundUser){
              foundUser.secret.splice(foundUser.secret.indexOf(req.body.secret),1);
              foundUser.save(function (err) {
                if(!err){
                  res.redirect("/secrets");
                }
              });
            });
          }else {
            res.redirect("/signin");
          }
    });

app.listen(3000, function() {
    console.log("Server started on Port 3000");
});
