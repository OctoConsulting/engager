const User = require('../models/user');
const request = require('request');
const config = require('../config');

const html_response_string = `<div class="message-box">
  <div class="panel panel-success">
    <div class="panel-heading"><h4><strong>Linkedin Successfully logged in</strong></h4></div>
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
    const parsedBody = JSON.parse(body).data;
    res.send(parsedBody);
  });
}
