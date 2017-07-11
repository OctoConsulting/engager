const User = require('../models/user');
const request = require('request');
const config = require('../config');

module.exports = function(req, res, next){
  const user_id = req.params.id;
  const github_username = req.body.github;
  request({
    method: 'GET',
    headers: {'user-agent': 'node.js'},
    uri: `https://api.github.com/users/${github_username}/events/public`
  }, function(error, response, body){
      const data = JSON.parse(body);
      let filtered_data = [];
      let counter = 0, obj = {}, date_mod = 0;
      for (i=0; i < data.length; i++){
        date_mod = Date.parse(data[i].created_at) / 1000;
        if((data[i].type == "PushEvent") && (date_mod >= config.creation_timestamp)){
          obj = {
            date: date_mod,
            id: data[i].id
          }
          filtered_data[counter] = obj;
          counter++;
        }
      }

      const updated = {
        username: github_username,
        data: filtered_data,
        points: filtered_data.length * 5
      }

      User.findByIdAndUpdate({_id: user_id}, {$set: {github : updated, github_check: true}})
          .then(() => User.findById({_id: user_id}))
          .then( user => res.send(user.github))
          .catch(next);
  });
}
