const User = require('../models/user');
const request = require('request');
const config = require('../config');



module.exports = function(req, res, next){
  const options = {
    url: 'https://api.instagram.com/oauth/access_token',
    method: 'POST',
    form: {
      'client_id': 'bb65c1a4262349d78765097663077982',
      'client_secret': '2d472d1d92cc4802b91943e4edf107be',
      'grant_type': 'authorization_code',
      'redirect_uri': 'http://localhost:3090/authInstagram',
      'code': req.query.code
    }
  };

  request(options, function(err, response, body){
    const result = {
      user_id: req.query.state,
      access_token: JSON.parse(body).access_token,
      instagram_id: JSON.parse(body).user.id
    };
    req.result = result;
    next();
  });
}
