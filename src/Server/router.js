const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');

//SERVICES
//##################################################################
const passport = require('passport');

const facebook = require('./services/Facebook');
const facebook_deauth = require('./services/facebook_deauth');

const authLinkedin = require('./services/authLinkedin');
const linkedin_deauth = require('./services/linkedin_deauth');
const linkedin = require('./services/LinkedIn');


const twitter = require('./services/Twitter');
const twitter_deauth = require('./services/twitter_deauth');

const dashboard = require('./services/dashboard');

const stackoverflow = require('./services/StackOverflow');
const stackoverflow_deauth = require('./services/stackoverflow_deauth');

const jsfiddle = require('./services/jsFiddle');
//const jsfiddle_deauth = require('./services/jsfiddle_deauth');

const github = require('./services/GitHub');
const github_deauth = require('./services/github_deauth');

const authInstagram = require('./services/authInstagram');
const instagram = require('./services/Instagram');
const instagram_deauth = require('./services/instagram_deauth');





const Events = require('./services/Events');
const getuserinfo = require('./services/GetUserInfo');
//##################################################################

//Helper object to authenticate users
const requireAuth = passport.authenticate('jwt', {session:false});
const requireSignin = passport.authenticate('local', {session:false});

module.exports = function(app){

  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);

  //UPDATES VERIFICATION STATUS WHEN EMAIL IS CLICKED
  app.put('/verify/:id', Authentication.verify);
  //PULL ALL USER INFO TO DISPLAY ON THE DASHBOARD
  app.get('/dashboard', dashboard);
  //LOADS CURRENT USER TO THE NAV BAR AND PERSONAL PROFILE
  app.get('/user/:id', getuserinfo);
  //ADDING EVENT DATA TO DATABASE
  app.put('/addingEvent/:id', Events.addEvent);
  app.get('/getEvent/:id', Events.getEvents);

  //DIFFERENT SOCIAL MEDIA ARE HANDLED BY DIFFERENT SERVICES
  app.put('/pushTwitterData/:id', twitter);
  app.put('/pushStackOverflowData/:id', stackoverflow);
  app.put('/pushJsFiddleData/:id', jsfiddle);
  app.put('/pushGitHubData/:id', github);

  app.put('/twitter_deauth/:id', twitter_deauth);
  app.put('/github_deauth/:id', github_deauth);
  app.put('/stackoverflow_deauth/:id', stackoverflow_deauth);




  app.put('/deauthFacebook/:id', facebook_deauth);
  app.put('/pushFacebookData/:id', facebook);

  app.put('/deauthInstagram/:id', instagram_deauth);
  app.get('/authInstagram', authInstagram, instagram);

  app.put('/deauthLinkedin/:id', linkedin_deauth);
  app.get('/authLinkedin',authLinkedin, linkedin);
}
