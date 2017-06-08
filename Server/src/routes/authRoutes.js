var express = require('express');
var authRouter = express.Router();
var passport = require('passport');
var bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');
var flash = require('express-flash');
var repos = require('../dal/repos');
var authRepo = repos.authRepo;
var usersRepo = repos.usersRepo;
var multer = require("multer");
var repos = require('../dal/repos');
var providersRepo = repos.providersRepo;
var authUtil = require("../utils/auth");
var model = require("homepark.common").model;
//global variables used: gfs, db
var fs = require('fs');

//functions

module.exports = router;
