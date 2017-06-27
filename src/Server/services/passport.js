//HELPER LIBRARY FOR COOKIE AND TOKEN BASED AUTHENTICATION

const passport = require('passport');
const User = require('../models/user');
const config = require('../config');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');


//CREATE LOCAL STRATEGY -- USERNAME PASSWORD BASED AUTHENTICATION
const localOptions = {usernameField: 'email'};
const localLogin = new LocalStrategy(localOptions, function(email, password, done){
  //Verify username and password, call done with the username
  User.findOne({email: email}, function(err, user){
    if (err) {return done(err);}
    if (!user) {return done(null, false);}

    //Call done with false with it's NOT correct
    user.comparePassword(password, function(err, isMatch){
      if(err) {return done(err);}
      if (!isMatch) {return done(null, false);}

      return done(null, user);
    });
  });
});


//SET UP OPTIONS FOR JWT STRATEGY
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

//Create JWT STRATEGY -- TOKEN BASED AUTHENTICATION
//payload is the tokenized object from jwt in authentication.js
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
  //Check the payload to see if the user encoded in there exists in the DB
  //if it does, call done with that user object
  //If not, call done without it and deny access
  User.findById(payload.sub, function(err, user){
    if(err) {return done(err, false);}

    //if they do exist
    if(user){
      done(null, user);
    }
    //If they don't exist
    else{
      done(null, false);
    }
  });
});

//TELL PASSPORT TO USE THIS STRATEGY
passport.use(jwtLogin);
passport.use(localLogin);
