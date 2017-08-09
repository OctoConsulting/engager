const User = require('../models/user');
const request = require('request');
const config = require('../config');

const html_response_string = `<div class="message-box">
  <div class="panel panel-success">
    <div class="panel-heading"><h4><strong>GitHub Successfully logged in</strong></h4></div>
  </div>
  <script>
    setTimeout(() => window.close(), 1000);
  </script>
</div>`;

module.exports = function(req, res, next){
  const user_id = req.result.user_id;
  const github_token = req.result.access_token;

  const options = {
    method: 'GET',
    headers: {
      'user-agent': 'node.js',
      'Authorization': `token ${github_token}`
    },
    uri: `https://api.github.com/user`
  };

  request(options, function(error, response, body){
    const options1 = {
      method: 'GET',
      headers: {
        'user-agent': 'node.js',
        'Authorization': `token ${github_token}`
      },
      uri: `https://api.github.com/users/${JSON.parse(body).login}/events/public`
    };
      request(options1, function(error, response, body){
        const data = JSON.parse(body);
        console.log(data);
        let filtered_data = [];
        let counter = 0, obj = {}, date_mod = 0;
        for (i=0; i < data.length; i++){
         date_mod = Date.parse(data[i].created_at) / 1000;
         if((data[i].type == "PushEvent") && (date_mod >= config.creation_timestamp)){
          obj = {
            date: date_mod,
            id: data[i].id
          }
          filtered_data[counter] = obj;
          counter++;
        }
      }

      const updated = {
        username: JSON.parse(body)[0].actor.login,
        accessToken: github_token,
        data: filtered_data,
        actions: filtered_data.length,
        points: filtered_data.length * 5
      }

      User.findByIdAndUpdate({_id: user_id}, {$set: {github : updated}})
          .then(() => User.findById({_id: user_id}))
          .then( user => res.send(html_response_string))
          .catch(next);
      });
  });
}
