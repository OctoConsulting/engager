const User = require('../models/user');
const request = require('request');
const config = require('../config');

//FIRST LINKEDIN MODULE TO TRADE USER TOKEN FOR AN ACTUAL ACCESS TOKEN
module.exports = function(req, res, next){
  const user_id = req.params.id;
  const updated = {
    username: '',
    data: null,
    actions: 0,
    points: 0
  };
  User.findByIdAndUpdate({_id: user_id}, {$set: {twitter : updated}})
      .then(() => User.findById({_id: user_id}))
      .then( user => res.send(user))
      .catch(next);
}
