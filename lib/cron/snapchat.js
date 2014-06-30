var snapchat = require('snapchat');
var config = require('../config/config');
var fs = require('fs');
var async = require('async');
var CronJob = require('cron').CronJob;
var moment = require('moment');

var mongoose = require('mongoose');
var Snap = mongoose.model('Snap');

var client = new snapchat.Client({username: config.SNAPCHAT_USERNAME, password: config.SNAPCHAT_PASSWORD});

var checkSnaps = function() {
  console.log("Checking for snaps...");
  async.auto({
    data: function(next) {
      client.login(config.SNAPCHAT_USERNAME, config.SNAPCHAT_PASSWORD).then(function(data) { next(null, data); });
    },

    saveSnaps: ["data", function(next, results) {
      var data = results.data;
      if (typeof data.snaps === 'undefined') {
          console.log("typeof data.snaps == undefined", data);
          return next();
      }

      if (data.snaps.length === 0) {
        console.log('No Snaps :(');
        return next();
      }

      async.each(data.snaps, function(snap, cb) {
        if (typeof snap.sn !== 'undefined' && typeof snap.t !== 'undefined' && snap.st === 1) {
          console.log('Saving snap from ' + snap.sn + '...');

          var public_filename = '/snaps/' + snap.sn + '_' + snap.id + '.jpg';
          var filename = config.snapDir + snap.sn + '_' + snap.id + '.jpg';
          var stream = fs.createWriteStream(filename, { flags: 'w', encoding: null, mode: 0666 });
          client.getBlob(snap.id).then(function(blob) {
            blob.pipe(stream);
            blob.resume();
          });

          var s = new Snap({
            filepath: public_filename,
            fromUser: snap.sn
          });
          s.save(cb);
        }
      }, function(err, results) {
        next(err, results);
      });
    }],

    clearSnaps: ["saveSnaps", function(next) {
      client.clear().then(next);
    }],
  }, function(err, results) {
    console.log("Done with snapchat", err);
  });
};

exports.checkSnaps = checkSnaps;
checkSnaps();

var job = new CronJob({
  cronTime: "00 */1 * * * *",
  onTick: checkSnaps,
  start: true,
});
job.start();