'use strict';

angular.module('lollersnapsApp')
  .controller('MainCtrl', function ($scope, $http, $location, Snap) {

    $scope.upVote = function(snap) {
        snap.upVotes++;
        snap.$update();
    };

    $scope.downVote = function(snap) {
        snap.downVotes++;
        snap.$update();
    };

    if ($location.path() === '/top') {
        $scope.snaps = Snap.query({sort: '-upVotes'});
    } else {
        $scope.snaps = Snap.query({sort: '-dateAdded'});
    }
  });
