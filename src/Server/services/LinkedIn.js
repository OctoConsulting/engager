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

  const options = {
    url: 'https://api.linkedin.com/v1/people/~:(first-name,last-name,num-connections,picture-urls::(original))?format=json',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  };

  request(options, function(err, response, body){
    const parsedBody = JSON.parse(body);

    const updated = {
      username: `${parsedBody.firstName} ${parsedBody.lastName}`,
      data: {
        accessToken: accessToken
      },
      avatar: parsedBody.pictureUrls.values[0],
      actions: parsedBody.numConnections,
      points: parsedBody.numConnections
    };
    //console.log(parsedBody.pictureUrls.values[0]);
    User.findByIdAndUpdate({_id: user_id}, {$set: {linkedin : updated}})
        .then(() => User.findById({_id: user_id}))
        .then( user => res.send(html_response_string))
        .catch(next);

    User.findByIdAndUpdate({_id: user_id}, {$set: {avatar: parsedBody.pictureUrls.values[0]}})
        .then(() => User.findById({_id: user_id}))
        .then( user => res.send(user.avatar))
        .catch(next);

  });
}
