const User = require('../models/user');
const Twitter = require('twitter');
const twitter_api = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
const config = require('../config');


const client = new Twitter({
  consumer_key: config.Twitter.consumer_key,
  consumer_secret: config.Twitter.consumer_secret,
  bearer_token: config.Twitter.bearer_token
});


module.exports = function(req, res, next){
  const user_id = req.params.id;
  const twitter_username = req.body.twitter;


  client.get(twitter_api, {screen_name: twitter_username, count:3200}, function(err, data, response){
    let array = [];
    let newDate;
    //Converting UTC time to Unix timestamp
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
      points: array.length
    };

  //console.dir(updated);

  User.findByIdAndUpdate({_id: user_id}, {$set: {twitter: updated}})
      .then(() => User.findById({_id: user_id}))
      .then( user => res.send(user.twitter))
      .catch(next);
      // twitter_data = data;
  });

}
