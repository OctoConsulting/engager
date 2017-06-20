var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();


router.get('/', function (req, res) {
  if(req.user)
    res.status(200).json({ user : req.user });
  else
    res.status(400).json({ message : "not logged in" });
});

router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/register', function(req, res) {
    Account.register(req.body.name , req.body.email, req.body.password,  function(err, account) {
        if (err) {
            // return res.render('register', { account : account });
              res.status(400).send(err);

        }
        passport.authenticate('local')(req, res, function () {
            res.status(200).json({message : "Success!"});
        });
    });
});

// router.get('/login', function(req, res) {
//     res.render('login', { user : req.user });
// });

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.status(200).json({message:"login successful"});
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;
