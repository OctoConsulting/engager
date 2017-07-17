const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const twitter = require('./services/Twitter');
const dashboard = require('./services/dashboard');
const stackoverflow = require('./services/StackOverflow');
const github = require('./services/GitHub');
const instagram = require('./services/Instagram');

const getuserinfo = require('./services/GetUserInfo');
//Helper object to authenticate users
const requireAuth = passport.authenticate('jwt', {session:false});
const requireSignin = passport.authenticate('local', {session:false});

module.exports = function(app){
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
  app.put('/verify/:id', Authentication.verify);
  //This made sure that any requests is routed through the authorization module
  app.get('/dashboard', dashboard);
  app.get('/user/:id', getuserinfo);
  app.put('/pushTwitterData/:id', twitter);
  app.put('/pushStackOverflowData/:id', stackoverflow);
  app.put('/pushGitHubData/:id', github);
  app.put('/pushInstagramData/:id', instagram);

}
