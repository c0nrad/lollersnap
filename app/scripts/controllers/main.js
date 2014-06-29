'use strict';

angular.module('lollersnapsApp')
  .controller('MainCtrl', function ($scope, $http, Snap) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.snaps = Snap.query();
  });
