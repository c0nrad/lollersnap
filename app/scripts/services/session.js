'use strict';

angular.module('lollersnapsApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
