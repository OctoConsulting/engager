const User = require('../models/user');
const Twitter = require('Twitter');
const twitter_api = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
const config = require('../config');

const client = new Twitter({
  consumer_key: config.Twitter.consumer_key,
  consumer_secret: config.Twitter.consumer_secret,
  bearer_token: config.Twitter.bearer_token
});


//
module.exports = function(req, res, next){
  const user_id = req.params.id;
  const twitter_username = req.body.twitter;


  client.get('https://api.twitter.com/1.1/statuses/user_timeline.json', {screen_name: twitter_username}, function(err, data, response){
  //console.dir(res[0].user);
  const updated = {
    username: twitter_username,
    data: data[0].user
  };

  //console.dir(updated);

  User.findByIdAndUpdate({_id: user_id}, {$set: {twitter: updated}})
      .then(() => User.findById({_id: user_id}))
      .then( user => res.send(user))
      .catch(next);
      // twitter_data = data;
  });

}
