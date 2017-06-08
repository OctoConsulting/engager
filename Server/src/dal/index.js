var authRepo = require('./authMongo');
var usersRepo = require('./userMongo');

module.exports = {
  authRepo,
  userRepo
  setupDb: function(db){
    parkingRepo.setupDb(db);
  }
};
