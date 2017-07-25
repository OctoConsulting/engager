const User = require('../models/user');
const request = require('request');
const config = require('../config');
FB = require('fb')


function getAccess(){
  return new Promise( (resolve, reject) => {
    FB.api('oauth/access_token', {
      client_id: '451996951822224',
      client_secret: 'af97b74256742bac119f6f66e2b0987a',
      grant_type: 'client_credentials'
  }, function (res) {
      if(!res || res.error) {
          console.log(!res ? 'error occurred' : res.error);
          return;
      }
      console.log('access here');
      console.log(res.access_token);
      accessToken = res.access_token;
      resolve(accessToken);
    });
    });
}

module.exports = function(req, res, next){
    getAccess()
      .then( response => {
        const user_id = req.params.id;
        const username = req.body.facebook;
        console.log(response.data);
        const accessToken = response;
        request({
          method: 'GET',
          headers: {'user-agent': 'node.js'},
          uri: `https://graph.facebook.com/me?fields=${username}&access_token=d7rHtbVOBvDUwN6JTyDd5ExuRHU`
          }, function(error, response, body){
            const updated = {
              username: '',
              data: '',
              points: ''
            }
            res.send(response);
        });
      });
}
