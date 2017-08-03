const User = require('../models/user');
const request = require('request');
const config = require('../config');

//FIRST LINKEDIN MODULE TO TRADE USER TOKEN FOR AN ACTUAL ACCESS TOKEN
module.exports = function(req, res, next){

  const options = {
    url: 'https://www.linkedin.com/oauth/v2/accessToken',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: {
      'grant_type': 'authorization_code',
      'code': req.query.code,
      'redirect_uri': 'http://localhost:3090/authLinkedin',
      'client_id': config.Linkedin.id_key,
      'client_secret': config.Linkedin.id_secret
    }
  };

  request(options, function(err, response, body){
    const result = {
      user_id: req.query.state,
      access_token: JSON.parse(body).access_token
    };
    console.log("What we want: ");
    console.log(result);
    req.result = result;
    next();
  });
}
