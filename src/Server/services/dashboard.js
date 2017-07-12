const User = require('../models/user');
const twitter = require('./dashboard_services/dashboard_twitter');
const github = require('./github');
const mongoose = require('mongoose');

function updateUsers(){
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

      array[user._id] = updated;

    });

    userU(array);
  });
}

function userU(array){

  console.log(array);
  for (i in array){
    console.log("id is: " + i);
    console.log(array[i]);
    User.update({_id: mongoose.mongo.ObjectId(i)}, {$set: {profile: array[i]}}, {multi: true});
    console.log("after call");
  }
}



module.exports = function(req, res, next){
  updateUsers();
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


}
