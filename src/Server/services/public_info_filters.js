const User = require('../models/user');
const mongoose = require('mongoose');
const jwt = require('jwt-simple');
const config = require('../config');

const daily_offset = 86400;
const weekly_offset_array = [86400, 86400, 172800, 259200, 345600, 432000, 518400];



module.exports = function(req, res, next){
  const user_id = req.params.id;
  const type = req.body.type;
  let anchor_date = 0;
  let facebook_u = '', twitter_u = '', stack_u = '', insta_u = '', linkedin_u = '', github_u = '', jsfiddle_u = '';
  let facebook_p = 0, twitter_p = 0, stack_p = 0, insta_p = 0, linkedin_p = 0, github_p = 0, jsfiddle_p = 0;
  let facebook_a = 0, twitter_a = 0, stack_a =0, insta_a = 0, linkedin_a = 0, github_a = 0, jsfiddle_a = 0;

  console.log(type);
  if (type === 'weekly'){
    const todays_date = new Date();//get today's day in UTC time
    const day_of_the_week = todays_date.getDay();//get the day of the week
    const epoch_date = Date.parse(todays_date) / 1000; //converting to epoch
    anchor_date = epoch_date - weekly_offset_array[day_of_the_week];
  }

  else if (type === 'monthly'){
    const todays_date = new Date();//get today's day in UTC time
    const day_of_the_month = todays_date.getDate();//get the day of the week
    const epoch_date = Date.parse(todays_date) / 1000; //converting to epoch
    anchor_date = epoch_date - (daily_offset * day_of_the_month);
  }
  console.log(anchor_date);
  User.findById({_id: user_id})
      .then( user => {
        if (anchor_date == 0){
          facebook_u = user.facebook.username;
          facebook_a = user.facebook.actions;
          facebook_p = user.facebook.points;

          twitter_u = user.twitter.username;
          twitter_a = user.twitter.actions;
          twitter_p = user.twitter.points;

          stack_u = user.stackoverflow.username;
          stack_a = user.stackoverflow.actions;
          stack_p = user.stackoverflow.points;

          insta_u = user.instagram.username;
          insta_a = user.instagram.actions;
          insta_p = user.instagram.points;

          linkedin_u = user.linkedin.username;
          linkedin_a = user.linkedin.actions;
          linkedin_p = user.linkedin.points;

          github_u = user.github.username;
          github_a = user.github.actions;
          github_p = user.github.points;

          jsfiddle_u = user.jsfiddle.username;
          jsfiddle_a = user.jsfiddle.actions;
          jsfiddle_p = user.jsfiddle.points;
        }
        else {
          if (user.jsfiddle.data !== null  && user.jsfiddle.data.length > 0){
            jsfiddle_u = user.jsfiddle.username;
            for (i=0; i < user.jsfiddle.data.length; i++){
              if(user.jsfiddle.data[i].date >= anchor_date){
                jsfiddle_p += 1;
                jsfiddle_a += 1;
              }
            }
          }

          if (user.facebook.data !== null  && user.facebook.data.length > 0){
            facebook_u = user.facebook.username;
            for (i=0; i < user.facebook.data.length; i++){
              if(user.facebook.data[i].date >= anchor_date){
                facebook_p += 1;
                facebook_a += 1;
              }
            }
          }

          if (user.twitter.data !== null  && user.twitter.data.length > 0){
            twitter_u = user.twitter.username;
            for (i=0; i < user.twitter.data.length; i++){
              if (user.twitter.data[i].date >= anchor_date){
                twitter_p += 1;
                twitter_a += 1;
              }
            }
          }

          if (user.stackoverflow.data !== null  && user.stackoverflow.data.length > 0) {
            stack_u = user.stackoverflow.username;
            for (i=0; i < user.stackoverflow.data.length; i++){
              if (user.stackoverflow.data[i].date >= anchor_date){
                stack_a += 1;
                if (user.stackoverflow.data[i].post_type == "answer"){
                  stack_p += 10;
                }
                else {stack_p += 2}
              }
            }
          }

          if (user.instagram.data !== null  && user.instagram.data.length > 0){
            insta_u = user.instagram.username;
            for (i=0; i < user.instagram.data.length; i++){
              if (user.instagram.data[i].date >= anchor_date){
                insta_p += 1.5;
                insta_a += 1;
              }
            }
          }

          if (user.github.data !== null && user.github.data.length > 0){
            github_u = user.github.username;
            for (i=0; i < user.github.data.length; i++){
              if (user.github.data[i].date >= anchor_date){
                github_p += 5;
                github_a += 1;
              }
            }
          }
        }


        const user_data_array = {
          jsfiddle: {
            username: jsfiddle_u,
            actions: jsfiddle_a,
            points: jsfiddle_p
          },
          twitter: {
            username: twitter_u,
            actions: twitter_a,
            points: twitter_p
          },
          facebook: {
            username: facebook_u,
            actions: facebook_a,
            points: facebook_p
          },
          stackoverflow: {
            username: stack_u,
            actions: stack_a,
            points: stack_p
          },
          instagram: {
            username: insta_u,
            actions: insta_a,
            points: insta_p
          },
          github: {
            username: github_u,
            actions: github_a,
            points: github_p
          },
          linkedin: {
            username: linkedin_u,
            actions: linkedin_a,
            points: linkedin_p
          }
        };

        res.send(user_data_array);
      })
      .catch( error => {
        console.log("Error retrieving user's filtered scores");
        console.log(error);
      });
}
