const User = require('../models/user');
const request = require('request');
const config = require('../config');




module.exports = function(req, res, next){
  const user_id = req.result.user_id;
  const accessToken = req.result.access_token;

  const options = {
    url: 'https://api.linkedin.com/v1/people/~:(first-name,last-name,num-connections)?format=json',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  };

  request(options, function(err, response, body){
    const parsedBody = JSON.parse(body);

    const updated = {
      username: `${parsedBody.firstName} ${parsedBody.lastName}`,
      data: {
        accessToken: accessToken
      },
      actions: parsedBody.numConnections,
      points: parsedBody.numConnections
    };

    User.findByIdAndUpdate({_id: user_id}, {$set: {linkedin : updated}})
        .then(() => User.findById({_id: user_id}))
        .then( user => res.send(user.linkedin))
        .catch(next);
  });
}
