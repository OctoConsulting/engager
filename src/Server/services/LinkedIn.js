const User = require('../models/user');
const request = require('request');
const config = require('../config');      //     id               secret
const Linkedin = require('node-linkedin')('778l6ot4kvtw5r', 'CBfe31te33qaJx1P', 'http://localhost:8080/Profile');


//const redirect_uri = 'http://localhost:8080/Profile';



module.exports = function(req, res){
  // not sure where to get this
  const linkedin = Linkedin.init('my_access_token');
  var scope = ['r_basicprofile'];
  Linkedin.auth.authorize(res, scope);  

Linkedin.auth.getAccessToken(res, req.query.code, req.query.state, function(err, results) {
    if ( err )
            return console.error(err);

        console.log(results);
        return res.redirect('/');
    });
    
    // Loads the profile of access token owner.
    linkedin.people.me(function(err, $in) {
        console.log($in);
    });

    // Loads the profile by id. 
    linkedin.people.id('linkedin_id', function(err, $in) {
        console.log($in)
    });

const updated = {
      username: username,
      data: data,
      points: 0
    }

    User.findByIdAndUpdate({_id: user_id}, {$set: {instagram : updated}})
        .then(() => User.findById({_id: user_id}))
        .then( user => res.send(user.instagram))
        .catch(next);
}
