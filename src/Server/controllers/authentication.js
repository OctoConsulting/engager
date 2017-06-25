const User = require('../models/user');

//IMPORT CONFIG FILE AND JWT LIBRARY
const jwt = require('jwt-simple');
const config = require('../config');


//Tokenize a piece of information
function tokenForUser(user){
  const timestamp = new Date().getTime();//creating timestamp for the token
  //subject is userid, initialized at time: timestamp
  return jwt.encode({ sub: user.id, iat: timestamp}, config.secret);
}



exports.signin = function(req, res, next){
  //User already authorized with their username and password
  //Only needs a token
  res.send({token: tokenForUser(req.user)});
}


exports.signup = function(req, res, next){
  //See if the user with the given email exists
  const email = req.body.email;
  const password = req.body.password;
  const verified = false;

  if(!email || !password){
    return res.status(422).send({error: "Missing field(s)"});
  }

  //If they do exist, then return an error
  User.findOne({email: email}, function(err, existingUser) {
    //If the connection drops, return an error
    if(err){
      return next(err);
    }
    //If there's an existing user
    if (existingUser){
      return res.status(422).send({error: 'Email is in use'});
    }

    //if a user with email does NOT exist, create and save user record
    const user = new User({
      email: email,
      password: password,
      verified: verified
    });
    user.save(function(err){
      if(err){return next(err);}
    });
    res.json({token: tokenForUser(user)}); //just responding with a json to show that it receives
  });



  //Respond to request indicating the user was created
}
