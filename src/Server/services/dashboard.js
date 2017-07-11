const User = require('../models/user');


function updateUsers(){
  User.find({}, function(err, users) {

      users.forEach(function(user) {
        // userMap[user._id] = user.profile;
         let updated = {
           "avatar" : "hi",
            "name" : user.name,
            "lai" : "",
            "actions" : 0,
            "points" : user.stackoverflow.points + user.linkedin.points + user.github.points + user.twitter.points
        };
        user.profile = updated;
        user.save();
      });
  });
}

module.exports = function(req, res, next){
  updateUsers();
  User.find({}, function(err, users) {
    var userMap = [];
    count=0;
      users.forEach(function(user) {
        userMap[count] = user.profile;
        count++;
      });
      console.log(userMap);
      res.send(userMap);
  });


}
