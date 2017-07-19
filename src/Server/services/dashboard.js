const User = require('../models/user');
const twitter = require('./dashboard_services/dashboard_twitter');
const github = require('./github');
const mongoose = require('mongoose');

function updateUsers(){
  return new Promise( (resolve, reject) => {
    let array = {};
    User.find({}, function(err, users) {
      users.forEach(function(user) {
          let updated = {
             "avatar" : "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2578170.jpg",
              "name" : user.name,
              "lai" : "https://s3-us-west-2.amazonaws.com/jrdevsresumes/company_logos/66604/octo-consulting.png?1478301859",
              "actions" : 0,
              "points" : user.stackoverflow.points + user.linkedin.points + user.github.points + user.twitter.points
          };
          User.findByIdAndUpdate({_id: user._id}, {$set: {profile: updated}})
              .then( () => User.findById({_id: user._id}))
              .catch();
      });
      resolve(true);
    });
  })

}

function userU(array){
  for (i in array){
    User.findByIdAndUpdate({_id: i}, {$set: {profile: array[i]}})
        .then(() => User.findById({_id: i}))
        .catch();
  }
}



module.exports = function(req, res, next){
  updateUsers(). then( done => {
    User.find({}, function(err, users) {
      var userMap = [];
      count=0;
        users.forEach(function(user) {
          userMap[count] = user.profile;
          count++;
        });
        console.log(userMap);
        res.send(userMap);
    });
  });
}
