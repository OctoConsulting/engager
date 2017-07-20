const User = require('../models/user');
const instagram = require('instagram-node').instagram();
const request = require('request');
const config = require('../config');

const redirect_uri = 'http://localhost:8080/instagramauth';


module.exports = function(req, res, next){
  const user_id = req.params.id;
  const ig_username = req.body.username;

  instagram.use({client_id: config.Instagram.id_key, client_secret: config.Instagram.id_secret});

  /*instagram.media_popular(function(err, media, remaining, limit){
    console.log(media);
  });*/

  instagram.user(ig_username, function(err, result, remaining, limit){
    data = err;
    const updated = {
      username: ig_username,
      data: data,
      actions: data.length,
      points: 0
    }

    User.findByIdAndUpdate({_id: user_id}, {$set: {instagram : updated}})
        .then(() => User.findById({_id: user_id}))
        .then( user => res.send(user.instagram))
        .catch(next);
    });
}
