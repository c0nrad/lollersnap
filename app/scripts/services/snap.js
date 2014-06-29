'use strict';

angular.module('lollersnapsApp')
  .factory('Snap', function Snap($resource) {
    return $resource('/api/snaps/:_id', {_id: '@_id'}, {update: {method: 'PUT'}});
  });
