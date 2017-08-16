const User = require('../models/user');

const mongoose = require('mongoose');


exports.getEvents = function(req, res, next){
  const user_id = req.params.id;
  User.findById({_id: user_id})
      .then( user => res.send(user.events.data))
      .catch(next);
}


exports.addEvent = function(req, res, next){
  const user_id = req.params.id;

  const updated = {
    date: req.body.timestamp_epoch.toString(),
    event_date: req.body.enteredDate,
    type : req.body.type,
    eventName : req.body.eventName,
    description : req.body.description,
    expiration: req.body.expiration
  }

  User.findById({_id: user_id})
      .then( user => User.findByIdAndUpdate({_id: user_id}, {$set: {'events.points': user.events.points + 10}}))
      .then( () => {
        User.findByIdAndUpdate({_id: user_id}, {$push: {'events.data': updated}})
            .then(() => User.findByIdAndUpdate({_id: user_id}))
            .then( user => res.send(user.events.data))
            .catch(next);
      })
      .catch(next);

}

exports.deleteEvent = function(req, res, next){
  const user_id = req.params.id;
  const timestamp = req.body.timestamp;
  User.findById({_id:user_id})
      .then( user => User.findByIdAndUpdate({_id: user_id}, {$set: {'events.points': user.events.points - 10}}))
      .then( () => {
        User.findByIdAndUpdate({_id:user_id}, {$pull: {'events.data': {date: timestamp}}})
            .then( () => User.findById({_id:user_id}))
            .then( user => res.send(user.events.data))
            .catch(next);
      })

}
