'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Snap = mongoose.model('Snap'),
    baucis = require('baucis');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

var snapController = baucis.rest('Snap');
snapController.get('/user/:user', function(req, res, next) {
  Snap.find({fromUser: req.params.user}).exec(function(err, snaps) {
    console.log(err, snaps);
    if (err) return next(err);
    if (snaps.length === 0) return res.send(404);
    res.send(snaps);
  });
});

exports.snaps = baucis();

