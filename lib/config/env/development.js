'use strict';

var path = require('path');

var rootPath = path.normalize(__dirname + '/../../..');

module.exports = {
  snapDir: rootPath + '/snaps/',
  env: 'development',
  mongo: {
    uri: 'mongodb://localhost/lollersnaps-dev'
  },
  SNAPCHAT_USERNAME: "lollersnap",
  SNAPCHAT_PASSWORD: "1337h4x0r"
};