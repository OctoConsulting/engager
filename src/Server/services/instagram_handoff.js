const User = require('../models/user');
const request = require('request');
const config = require('../config');

const html_response_string = `<div class="message-box">
  <div class="panel panel-success">
    <div class="panel-heading"><h4><strong>Instagram Successfully logged in</strong></h4></div>
  </div>
  <script>
    setTimeout(() => window.close(), 1000);
  </script>
</div>`;

//ACCESSING USER INFORMATION
module.exports = function(req, res, next){
  const user_id = req.result.user_id;
  const accessToken = req.result.access_token;
  const instagram_id = req.result.instagram_id;
  const instagram_username = req.result.instagram_username;
  console.log(instagram_id);
  console.log(accessToken);
  const options = {
    url: `https://api.instagram.com/v1/users/${instagram_id}/media/recent/`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    qs: {
      'access_token': accessToken
    }
  };

  request(options, function(err, response, body){
    const data = JSON.parse(body).data;
    if (data){
      let array = [];
      let newDate;
      //CONVERTS UTC TIME TO UNIX TIMESTAMP
      //ONLY STORING TWEET IDs AND TIMESTAMPS
      for (i=0; i < data.length; i++){
        if (Number(data[i].created_time) >= Number(config.creation_timestamp)){
          array[i] = {
            date: Number(data[i].created_time),
            id: data[i].id
          }
        }
      }

      const updated = {
        username: instagram_username,
        data: array,
        actions: array.length,
        points: array.length * 1.5
      };

      User.findByIdAndUpdate({_id: user_id}, {$set: {instagram: updated}})
          .then(() => User.findById({_id: user_id}))
          .then( user => res.send(html_response_string))
          .catch(next);
          // twitter_data = data;
    }
  });
}
