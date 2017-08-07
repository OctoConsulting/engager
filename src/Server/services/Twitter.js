const User = require('../models/user');
const Twitter = require('twitter');
const twitter_api = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
const config = require('../config');

//INITIATING KEYS AND TOKEN
const client = new Twitter({
  consumer_key: config.Twitter.consumer_key,
  consumer_secret: config.Twitter.consumer_secret,
  bearer_token: config.Twitter.bearer_token
});

//MAIN MODULE TO PULL INFO FROM TWITTER
module.exports = function(req, res, next){
  const user_id = req.params.id;
  const twitter_username = req.body.twitter;


  client.get(twitter_api, {screen_name: twitter_username, count:3200}, function(err, data, response){
    let array = [];
    let newDate;
    //CONVERTS UTC TIME TO UNIX TIMESTAMP
    //ONLY STORING TWEET IDs AND TIMESTAMPS
    for (i=0; i < data.length; i++){
      newDate = Date.parse(data[i].created_at) / 1000;
      if (Number(newDate) >= Number(config.creation_timestamp)){
        array[i] = {
          date: newDate,
          id: data[i].id_str
        }
      }
    }
    const updated = {
      username: twitter_username,
      data: array,
      actions: array.length,
      points: array.length
    };

  User.findByIdAndUpdate({_id: user_id}, {$set: {twitter: updated}})
      .then(() => User.findById({_id: user_id}))
      .then( user => res.send(user.twitter))
      .catch(next);
      // twitter_data = data;
  });
  const twitter_userapi = 'https://api.twitter.com/1.1/users/show.json';
  client.get(twitter_userapi, {screen_name: twitter_username}, (error, data, response) => {
    let avatar = data.profile_image_url;
    avatar = avatar.replace("_normal", "");
    User.findByIdAndUpdate({_id: user_id}, {$set: {avatar: avatar}})
        .then(() => User.findById({_id: user_id}))
        .catch(next);
  });

}
