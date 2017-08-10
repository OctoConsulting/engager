const User = require('../models/user');
const mongoose = require('mongoose');

const offset = 86400; //epoch time for 1 day

function updateUsers(){
  return new Promise( (resolve, reject) => {
    const todays_date = new Date();//get today's day in UTC time
    const day_of_the_month = todays_date.getDate();//get the day of the week
    const epoch_date = Date.parse(todays_date) / 1000; //converting to epoch
    const anchor_date = epoch_date - (offset * day_of_the_month);
    let array = {};
    User.find({}, (err, users) => {
      users.forEach(user => {
        let facebook_p = 0, twitter_p = 0, stack_p = 0, insta_p = 0, github_p = 0;
        let facebook_a = 0, twitter_a = 0, stack_a =0, insta_a = 0, github_a = 0;
        if (user.facebook.data !== null  && user.facebook.data.length > 0){
          for (i=0; i < user.facebook.data.length; i++){
            if(user.facebook.data[i].date >= anchor_date){
              facebook_p += 1;
              facebook_a += 1;
            }
          }
        }

        if (user.twitter.data !== null  && user.twitter.data.length > 0){
          for (i=0; i < user.twitter.data.length; i++){
            if (user.twitter.data[i].date >= anchor_date){
              twitter_p += 1;
              twitter_a += 1;
            }
          }
        }
        console.log("Twitter: ");
        console.log(twitter_p);
        if (user.stackoverflow.data !== null  && user.stackoverflow.data.length > 0) {
          for (i=0; i < user.stackoverflow.data.length; i++){
            if (user.stackoverflow.data[i].date >= anchor_date){
              stack_a += 1;
              if (user.stackoverflow.data[i].post_type == "answer"){
                stack_p += 10;
              }
              else {stack_p += 2}
            }
          }
        }

        if (user.instagram.data !== null  && user.instagram.data.length > 0){
          for (i=0; i < user.instagram.data.length; i++){
            if (user.instagram.data[i].date >= anchor_date){
              insta_p += 1.5;
              insta_a += 1;
            }
          }
        }

        if (user.github.data !== null && user.github.data.length > 0){
          for (i=0; i < user.github.data.length; i++){
            if (user.github.data[i].date >= anchor_date){
              github_p += 5;
              github_a += 1;
            }
          }
        }

        let updated = {
             avatar : user.avatar,
              name : user.name,
              lai : user.profile.lai,
              actions : stack_a + insta_a + github_a + twitter_a + facebook_a + user.linkedin.actions + user.events.points,
              points : stack_p + insta_p + user.linkedin.points + github_p + twitter_p + facebook_p + user.events.points
          };
          console.log(updated);
          User.findByIdAndUpdate({_id: user._id}, {$set: {profile: updated}})
              .then( () => User.findById({_id: user._id}))
              .catch();
      });
      resolve(true);
    });
  })
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
