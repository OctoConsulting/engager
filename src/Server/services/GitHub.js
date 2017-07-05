const User = require('../models/user');
const request = require('request');


module.exports = function(req, res, next){
  const user_id = req.params.id;
  const github_username = req.body.github;
  request({
    method: 'GET',
    uri: `https://api.github.com/users/${github_username}/events/public`
  }, function(error, response, body){
      const updated = {
        username: github_username,
        data: body
      }

      User.findByIdAndUpdate({_id: user_id}, {$set: {github : updated}})
          .then(() => User.findById({_id: user_id}))
          .then( user => res.send(user))
          .catch(next);
  });
}
