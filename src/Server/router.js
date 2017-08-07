const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');

//SERVICES
//##################################################################
const passport = require('passport');
const facebook = require('./services/Facebook');
const authLinkedin = require('./services/authLinkedin');
const linkedin = require('./services/Linkedin');
const twitter = require('./services/Twitter');
const dashboard = require('./services/dashboard');
const stackoverflow = require('./services/StackOverflow');
const github = require('./services/GitHub');
const authInstagram = require('./services/authInstagram');
const instagram = require('./services/Instagram');
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
  app.put('/pushGitHubData/:id', github);
  app.put('/pushFacebookData/:id', facebook);


  app.get('/authInstagram', authInstagram, instagram);
  app.get('/authLinkedin',authLinkedin, linkedin);
}
