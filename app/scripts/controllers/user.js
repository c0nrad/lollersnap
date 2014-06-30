'use strict';

angular.module('lollersnapsApp')
  .controller('UserCtrl', function ($scope, $http, $routeParams, User, Snap) {
    $scope.user = User.get({id: $routeParams.id}, function(user) {
      $scope.snaps = Snap.user({user: user.profile.snapchat});
    });
  });
