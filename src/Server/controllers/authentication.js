const User = require('../models/user');

exports.signup = function(req, res, next){
  //See if the user with the given email exists
  const email = req.body.email;
  const password = req.body.password;

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
      password: password
    });
    user.save(function(err){
      if(err){return next(err);}
    });
    res.json({success: true}); //just responding with a json to show that it receives
  });



  //Respond to request indicating the user was created
}
