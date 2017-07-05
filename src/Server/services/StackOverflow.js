const User = require('../models/user');
const request = require('request');

module.exports = function(req, res, next){
  const user_id = req.params.id;
  const stackoverflow_username = req.body.stackoverflow;

  request({
    method: 'GET',
    uri: `https://api.stackexchange.com/2.2/users/${stackoverflow_username}/timeline?site=stackoverflow`,
    gzip: true
  }, function(error, response, body){
      const updated = {
        username: stackoverflow_username,
        data: JSON.parse(body)
      }

      User.findByIdAndUpdate({_id: user_id}, {$set: {stackoverflow : updated}})
          .then(() => User.findById({_id: user_id}))
          .then( user => res.send(user))
          .catch(next);
  });


}
