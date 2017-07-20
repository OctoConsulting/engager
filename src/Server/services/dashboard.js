const User = require('../models/user');
const twitter = require('./dashboard_services/dashboard_twitter');
const github = require('./github');
const mongoose = require('mongoose');

const twitter_ico = "http://icons.iconarchive.com/icons/uiconstock/socialmedia/512/Twitter-icon.png";
const facebook_ico = "https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png";
const instagram_ico = "http://static6.businessinsider.com/image/5733417fdd0895c00d8b4617-1000-1000/instagram-app-review-41.png";
const linkedin_ico = "https://image.flaticon.com/icons/svg/34/34227.svg";
const stackoverflow_ico = "https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-icon.svg?v=6e4af45f4d66";
const github_ico = "https://image.flaticon.com/icons/svg/25/25231.svg";
const default_ico = "https://s3-us-west-2.amazonaws.com/jrdevsresumes/company_logos/66604/octo-consulting.png?1478301859";
let date = 0;

function updateUsers(){
  return new Promise( (resolve, reject) => {
    let array = {};
    User.find({}, (err, users) => {
      users.forEach(user => {

        if (user.linkedin.data !== null){
          if (user.linkedin.data[0].date > date){
          lai = linkedin_ico;
          }
        }

        if (user.facebook.data !== null){
          if(user.facebook.data[0].date > date){
            lai = facebook_ico;
          }
        }

        if (user.twitter.data !== null){
          if (user.twitter.data[0].date > date){
            lai = twitter_ico;
          }
        }

        if (user.stackoverflow.data !== null) {
          if (user.stackoverflow.data[0].date > date){
            lai = stackoverflow_ico;
          }
        }

        if (user.instagram.data !== null){
          if (user.instagram.data[0].date > date){
            lai = instagram_ico;
          }
        }

        if (user.github.data !== null){
          if (user.github.data[0].date > date){
            lai = github_ico;
          }
        }

        let updated = {
             avatar : "http://stock.wikimini.org/w/images/thumb/9/95/Gnome-stock_person-avatar-profile.png/240px-Gnome-stock_person-avatar-profile.png",
              name : user.name,
              lai : lai,
              actions : user.stackoverflow.actions + user.github.actions + user.twitter.actions,
              points : user.stackoverflow.points + user.linkedin.points + user.github.points + user.twitter.points
          };
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
