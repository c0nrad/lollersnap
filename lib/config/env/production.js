'use strict';

var path = require('path');

var rootPath = path.normalize(__dirname + '/../../..');

module.exports = {
  snapDir: rootPath + '/../snaps/',
  env: 'production',
  ip:   process.env.OPENSHIFT_NODEJS_IP ||
        process.env.IP ||
        '0.0.0.0',
  port: process.env.OPENSHIFT_NODEJS_PORT ||
        process.env.PORT ||
        8080,
  mongo: {
    uri: process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
         'mongodb://localhost/lollersnaps'
  },
  SNAPCHAT_USERNAME: "lollersnaps",
  SNAPCHAT_PASSWORD: "1337h4x0r69",
};