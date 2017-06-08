var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');
module.exports = function() {
    passport.use(new LocalStrategy({
            usernameField: 'userName',
            passwordField: 'password'
        },
        function(username, password, done) {
          var collection = db.collection('users');
          collection.findOne({
              username: username
          }, function(err, results) {
              console.log(results);
              if (results === null) {
                  done(null, false, {
                      message: 'bad username'
                  });
              } else if (results.password === null) {
                done(null, false, {message: 'sigin in using oauth please'});
              } else if (bcrypt.compareSync(password, results.password) && results.verified) {
                  var user = results;
                  done(null, user);
              } else {
                  done(null, false, {
                      message: 'Bad Password'
                  });
              }
          });
        }));
};
