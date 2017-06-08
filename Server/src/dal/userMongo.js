var bcrypt = require('bcrypt');
var braintree = require("braintree");
var repos = require('../dal/repos');
var usersRepo = repos.usersRepo;
var ObjectId = require('mongodb').ObjectId;
var gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: "6jfzh9m8d7ccqkz8",
    publicKey: "x8y2f9bfn2gn3zmx",
    privateKey: "6e401b98a9c420342858c5d7c466da27"
});
var authUtil = require('../utils/auth');
var config = require('../config/config')
var services = {
  
}
module.exports = services;
