'use strict';

angular.module('lollersnapsApp')
  .controller('MainCtrl', function ($scope, $http, $location, Snap) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.upVote = function(snap) {
        snap.upVotes++;
        snap.$update();
    }

    $scope.downVote = function(snap) {
        snap.downVotes++;
        snap.$update();
    }

    console.log($location.path());
    if ($location.path() == "/new") {
        console.log("LOADING NEWEST")
        $scope.snaps = Snap.query({sort: 'timestamp'});
    } else {
        console.log("LOADING BY VOTES...")
        $scope.snaps = Snap.query({sort: '-upVotes'})
    }
  });
