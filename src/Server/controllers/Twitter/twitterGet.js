var request = require("request");
var Twitter = require("twitter")
var twitter_api = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
//var bearer_token = 'AAAAAAAAAAAAAAAAAAAAAC9D1QAAAAAAi0AoObt49isSGovSBXoWR5uTpiY%3DVCKs7jmtj1mxSo9VQt18go9RRmdtknb0Nj3dTnLou1XTroxMoJ';
//var bearer_token = 'AAAAAAAAAAAAAAAAAAAAAC9D1QAAAAAAi0AoObt49isSGovSBXoWR5uTpiY=VCKs7jmtj1mxSo9VQt18go9RRmdtknb0Nj3dTnLou1XTroxMoJ';

// var options = {
//     method: 'GET',
//     url: twitter_api,
//     qs: {
//         "screen_name": "JoshFowler420"
//     },
//     json: true,
//     headers: {
//         "Authorization": "Bearer " + bearer_token
//     }
// };

// request(options, function(error, response, body) {
//   console.log(body);
//});

var client = new Twitter({
  consumer_key: 'jlD8BSZCNsCqqDpmHgkelSB6A',
  consumer_secret: 'zUEOxXBxfLJj3GmrWOS1DGCSZU9usa8htO5dSsgZIPXhSY7v3u',
  bearer_token: 'AAAAAAAAAAAAAAAAAAAAAC9D1QAAAAAAi0AoObt49isSGovSBXoWR5uTpiY%3DVCKs7jmtj1mxSo9VQt18go9RRmdtknb0Nj3dTnLou1XTroxMoJ'
});

client.get('https://api.twitter.com/1.1/statuses/user_timeline.json', {screen_name: 'JoshFowler420'}, function(req, res){
    //console.log(res);
    curuser.tweets = res.user.tweets
});