const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');

//SERVICES
//##################################################################
const passport = require('passport');

const dashboard = require('./services/dashboard');
const dashboard_weekly_filter = require('./services/dashboard_weekly_filter');

const facebook_auth = require('./services/facebook_auth');
const facebook_deauth = require('./services/facebook_deauth');

const linkedin_auth = require('./services/linkedin_auth');
const linkedin_deauth = require('./services/linkedin_deauth');
const linkedin_handoff = require('./services/linkedin_handoff');

const jsfiddle_auth = require('./services/jsfiddle_auth');

const twitter_auth = require('./services/twitter_auth');
const twitter_deauth = require('./services/twitter_deauth');



const stackoverflow_handoff = require('./services/stackoverflow_handoff');
const stackoverflow_auth = require('./services/stackoverflow_auth');
const stackoverflow_deauth = require('./services/stackoverflow_deauth');

const github_handoff = require('./services/github_handoff');
const github_auth = require('./services/github_auth');
const github_deauth = require('./services/github_deauth');

const instagram_auth = require('./services/instagram_auth');
const instagram_handoff = require('./services/instagram_handoff');
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
  app.get('/dashboard_weekly_filter', dashboard_weekly_filter);
  //LOADS CURRENT USER TO THE NAV BAR AND PERSONAL PROFILE
  app.get('/user/:id', getuserinfo);
  //ADDING EVENT DATA TO DATABASE
  app.put('/addingEvent/:id', Events.addEvent);
  app.get('/getEvent/:id', Events.getEvents);

  //DIFFERENT SOCIAL MEDIA ARE HANDLED BY DIFFERENT SERVICES
  app.put('/twitter_deauth/:id', twitter_deauth);
  app.put('/twitter_auth/:id', twitter_auth);

  app.put('/stackoverflow_deauth/:id', stackoverflow_deauth);
  app.get('/stackoverflow_auth/:id', stackoverflow_handoff);

  app.put('/jsfiddle_auth/:id', jsfiddle_auth);

  app.put('/github_deauth/:id', github_deauth);
  app.get('/github_auth', github_auth, github_handoff);

  app.put('/facebook_deauth/:id', facebook_deauth);
  app.put('/facebook_auth/:id', facebook_auth);

  app.put('/instagram_deauth/:id', instagram_deauth);
  app.get('/instagram_auth', instagram_auth, instagram_handoff);

  app.put('/linkedin_deauth/:id', linkedin_deauth);
  app.get('/linkedin_auth',linkedin_auth, linkedin_handoff);
}
