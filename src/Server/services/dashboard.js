const User = require('../models/user');
const mongoose = require('mongoose');
const jwt = require('jwt-simple');
const config = require('../config');


const twitter_ico = "http://icons.iconarchive.com/icons/uiconstock/socialmedia/512/Twitter-icon.png";
const facebook_ico = "https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png";
const instagram_ico = "http://static6.businessinsider.com/image/5733417fdd0895c00d8b4617-1000-1000/instagram-app-review-41.png";
const linkedin_ico = "https://image.flaticon.com/icons/svg/34/34227.svg";
const stackoverflow_ico = "https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-icon.svg?v=6e4af45f4d66";
const github_ico = "https://image.flaticon.com/icons/svg/25/25231.svg";
const default_ico = "https://s3-us-west-2.amazonaws.com/jrdevsresumes/company_logos/66604/octo-consulting.png?1478301859";
const jsfiddle_ico = "https://maxcdn.icons8.com/Share/icon/Logos//jsfiddle1600.png";

let date = 0;


function updateUsers(){
  return new Promise( (resolve, reject) => {
    let array = {};
    User.find({}, (err, users) => {
      users.forEach(user => {
        const timestamp = new Date().getTime();
        const token = jwt.encode({sub: user._id, iat: timestamp}, config.secret);

        let lai = 'https://pbs.twimg.com/profile_images/1534431858/Avatar_400x400.png';

        if (user.jsfiddle.data !== null  && user.jsfiddle.data.length > 0){
          if (user.jsfiddle.data[0].date > date){
          lai = jsfiddle_ico;
          }
        }

        if (user.linkedin.data !== null  && user.linkedin.data.length > 0){
          if (user.linkedin.data[0].date > date){
          lai = linkedin_ico;
          }
        }

        if (user.facebook.data !== null  && user.facebook.data.length > 0){
          if(user.facebook.data[0].date > date){
            lai = facebook_ico;
          }
        }

        if (user.twitter.data !== null  && user.twitter.data.length > 0){
          if (user.twitter.data[0].date > date){
            lai = twitter_ico;
          }
        }

        if (user.stackoverflow.data !== null  && user.stackoverflow.data.length > 0) {
          if (user.stackoverflow.data[0].date > date){
            lai = stackoverflow_ico;
          }
        }

        if (user.instagram.data !== null  && user.instagram.data.length > 0){
          if (user.instagram.data[0].date > date){
            lai = instagram_ico;
          }
        }

        if (user.github.data !== null && user.github.data.length > 0){
          if (user.github.data[0].date > date){
            lai = github_ico;
          }
        }

        let updated = {
            token: token,
            avatar : user.avatar,
            name : user.name,
            lai : lai,
            actions : user.stackoverflow.actions + user.jsfiddle.actions + user.github.actions + user.twitter.actions + user.facebook.actions + user.linkedin.actions + user.instagram.points + user.events.data.length,
            points : user.stackoverflow.points + user.linkedin.points + user.github.points + user.twitter.points + user.facebook.points + user.instagram.points + user.jsfiddle.points + user.events.points
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
