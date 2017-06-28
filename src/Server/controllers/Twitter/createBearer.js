var request = require('request');
var consumer_key = 'jlD8BSZCNsCqqDpmHgkelSB6A';
var consumer_secret = 'zUEOxXBxfLJj3GmrWOS1DGCSZU9usa8htO5dSsgZIPXhSY7v3u';
var encode_secret = new Buffer(consumer_key + ':' + consumer_secret).toString('base64');

var options = {
    url: 'https://api.twitter.com/oauth2/token',
    headers: {
        'Authorization': 'Basic ' + encode_secret,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
    body: 'grant_type=client_credentials'
};

request.post(options, function(error, response, body) {
    console.log(body); // <<<< This is your BEARER TOKEN !!!
});