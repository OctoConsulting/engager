const User = require('../models/user');
const request = require('request');
const config = require('../config');



module.exports = function(req, res, next){
  const options = {
    url: config.Instagram.accessToken_url,
    method: 'POST',
    form: {
      'client_id': config.Instagram.id_key,
      'client_secret': config.Instagram.id_secret,
      'grant_type': 'authorization_code',
      'redirect_uri': config.Instagram.redirect_uri,
      'code': req.query.code
    }
  };

  request(options, function(err, response, body){
    const parsedBody = JSON.parse(body);
    console.log(parsedBody);
    const result = {
      user_id: req.query.state,
      access_token: parsedBody.access_token,
      instagram_id: parsedBody.user.id,
      instagram_username: parsedBody.user.username
    };
    req.result = result;
    next();
  });
}
