const User = require('../models/user');



module.exports = function(req, res, next){

User.find({}, function(err, users) {
    var userMap = {};

    users.forEach(function(user) {
      userMap[user._id] = user;
    });

    res.send(userMap);  
  });


}
