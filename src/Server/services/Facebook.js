const User = require('../models/user');
const request = require('request');
const config = require('../config');
FB = require('fb');

module.exports = function(req, res, next){
    const user_id = req.params.id;
    const accessToken = req.body.accessToken;

    FB.api('/me?fields=id,name', {access_token: accessToken})
      .then( response => {
        FB.api(`/${response.id}/feed`, 'GET', {access_token: accessToken},
          function(result){
            let array = [];
            let newDate;
            for (i=0; i < result.data.length; i++){
              newDate = Date.parse(result.data[i].created_time) / 1000;
              if (Number(newDate) >= Number(config.creation_timestamp)){
                array[i] = {
                  date: newDate,
                  id: result.data[i].id
                }
              }
            }

            const updated = {
              username: response.name,
              accessToken: accessToken,
              data: array,
              actions: array.length,
              points: array.length
            };
            console.log(updated);
            User.findByIdAndUpdate({_id: user_id}, {$set: {facebook: updated}})
                .then(() => User.findById({_id: user_id}))
                .then( user => res.send(user.facebook))
                .catch(next);

          }
        );
      })

}
