const User = require('../models/user');
const request = require('request');
const config = require('../config');

//MAIN MODULE THAT PULLS JSFIDDLE INFORMATION
module.exports = function(req, res, next){
  const user_id = req.params.id;
  const jsfiddle_username = req.body.jsfiddle;

  request({
    method: 'GET',
    uri: `http://jsfiddle.net/api/user/${jsfiddle_username}/demo/list.json`,
    //gzip: true
  }, function(error, response, body){
      let filtered_data = [];
      const data = JSON.parse(body);
      let counter = 0, newDate = 0;

      //ONLY PULLING ANSWERS AND QUESTIONS, NO OTHER DATA
      for(i=0; i < data.length; i++){
        newDate = Date.parse(data[i].created) / 1000;
        if (Number(newDate) >= Number(config.creation_timestamp)){
          filtered_data[counter] = {
            post_url: data[i].url,
            date: Number(newDate)
          }
          counter++;
        }
      }

      const updated = {
        username: jsfiddle_username,
        data: filtered_data,
        actions: filtered_data.length,
        points: (filtered_data.length * 10)
      }

      User.findByIdAndUpdate({_id: user_id}, {$set: {jsfiddle : updated}})
          .then(() => User.findById({_id: user_id}))
          .then( user => res.send(user.jsfiddle))
          .catch(next);
  });


}
