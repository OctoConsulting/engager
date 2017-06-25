const bcrypt = require('bcrypt-nodejs');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//DEFINE THE USER MODEL
const userSchema = new Schema({
  //lowercase makes sure it's turned lowercase all the time
  email: {type: String, unique: true, lowercase: true}, //making sure the email field is always unique with MongoDB
  password: String
});

//On Save Hook, encrypt password
//pre save will ensure it runs before the model saves
userSchema.pre('save', function(next) {
  //get access to the user model
  const user = this;
  //Generate a salt, takes time so run call back after generated
  bcrypt.genSalt(10, function(err, salt){
    if (err) {return next(err);}
    //hash the password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {return next(err);}
      //override the plain text password with encrypted password
      user.password = hash;
      next();
    })
  })
})

//CREATE THE MODEL CLASS
const UserModelClass = mongoose.model('user', userSchema);


//EXPORT THE MODEL
module.exports = UserModelClass;
