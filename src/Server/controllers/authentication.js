const User = require('../models/user');
//IMPORT CONFIG FILE AND JWT LIBRARY
const jwt = require('jwt-simple');
const config = require('../config');
const nodemailer = require('nodemailer');



//HELPER FUNCTION TO TOKENIZE USER ID
function tokenForUser(user){
  const timestamp = new Date().getTime();//creating timestamp for the token
  //subject is userid, initialized at time: timestamp
  return jwt.encode({ sub: user.id, iat: timestamp}, config.secret);
}



/*#########################################################################
  #                                                                       #
  #                       SIGN IN/SIGN UP FUNCTIONS                       #
  #                                                                       #
  #########################################################################*/

exports.signin = function(req, res, next){
  //User already authorized with their username and password
  //Only needs a token
  res.send({token: tokenForUser(req.user)});


}


exports.signup = function(req, res, next){
  //See if the user with the given email exists
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  let baseUrl = req.protocol + '://localhost:8080/#/verify/';
  let text = 'You have requested to create an account at engager.io. To verify this please click the following link:\n' + baseUrl ;
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
      name: name,
      avatar: "http://stock.wikimini.org/w/images/thumb/9/95/Gnome-stock_person-avatar-profile.png/240px-Gnome-stock_person-avatar-profile.png",
      email: email,
      password: password,
      verified: verified,
      profile: {
        avatar: '',
        name: '',
        lai: '',
        actions: 0,
        points: 0
      },
      facebook: {
        username: '',
        data: null,
        actions: 0,
        points: 0
      },
      twitter: {
        username: '',
        data: null,
        actions: 0,
        points: 0
      },
      instagram: {
        username: '',
        data: null,
        actions: 0,
        points: 0
      },
      stackoverflow: {
        username: '',
        data: null,
        actions: 0,
        points: 0
      },
      github: {
        username: '',
        data: null,
        actions: 0,
        points: 0
      },
      linkedin: {
        username: '',
        data: null,
        actions: 0,
        points: 0
      }
    });
    user.save(function(err){
      if(err){return next(err);}
    });
    const emailToken = tokenForUser(user);
    text = text + emailToken;
    //Respond to request indicating the user was created
    res.json({token: tokenForUser(user)}); //just responding with a json to show that it receives
    sendEmail(text, req);
  });

}

/*#########################################################################
  #                                                                       #
  #                       EMAIL VERIFICATION FUNCTION                     #
  #                                                                       #
  #########################################################################*/
exports.verify = function(req, res, next){
  const user_id = req.params.id;

  User.findByIdAndUpdate({_id: user_id}, {$set: {verified: true}})
      .then( () => User.findById({_id: user_id}))
      .then( user => res.send(user))
      .catch(next);
}

//Nodemailer gmail email and password
const EMAIL_ACCOUNT_USER = config.EmailServer.emailAccountUser;
const EMAIL_ACCOUNT_PASSWORD = config.EmailServer.emailPassword;
const YOUR_NAME = config.EmailServer.emailName;

const smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
    auth: {
      user: EMAIL_ACCOUNT_USER,
      pass: EMAIL_ACCOUNT_PASSWORD
    }
});

function sendEmail(text, req, res, next) {
  console.log(req.body);
  console.log(text);
      smtpTransport.sendMail({  //email options
        from: EMAIL_ACCOUNT_USER, // sender address.  Must be the same as authenticated user if using GMail.
        to: req.body.email, // receiver
        subject: "Engager.io Email Verification", // subject
        text: text // body
      }, function(error, response){  //callback
        if(error){
          console.log(error);
        }else{
          console.log("Message sent: " + response.message);
          res.send("email sent");
        }

        smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
      });
    }
