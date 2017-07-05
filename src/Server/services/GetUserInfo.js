const User = require('../models/user');

module.exports = function(req, res, next){
  const user_id = req.params.id;

  User.findById({_id: user_id})
      .then(user => res.send(user))
      .catch(next);
}
