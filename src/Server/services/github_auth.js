const User = require('../models/user');
const request = require('request');
const config = require('../config');

//FIRST LINKEDIN MODULE TO TRADE USER TOKEN FOR AN ACTUAL ACCESS TOKEN
module.exports = function(req, res, next){
  const options = {
    url: config.GitHub.accessToken_url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
    form: {
      'code': req.query.code,
      'client_id': config.GitHub.id_key,
      'client_secret': config.GitHub.id_secret,
      'state': req.query.state
    }
  };

  request(options, function(err, response, body){
    console.log(body);
    const result = {
      user_id: req.query.state,
      access_token: JSON.parse(body).access_token
    };
    req.result = result;
    next();
  });
}
