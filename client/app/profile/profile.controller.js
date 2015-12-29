'use strict';

angular.module('hrr10MjbeApp')
  .controller('ProfileCtrl', function($scope, Student) {
    $scope.message = 'Hello';
    $scope.accepted = 'false';

    Student.getRequests(function(requests) {
      $scope.request = requests[0];
      console.log(requests);
    });

    Student.getTeacher(function(teacher) {
      console.log(teacher);
      $scope.teacher = teacher;
    })

    $scope.polymerChange = function() {
      if ($scope.accepted === 'true') {
        console.log('accepting');
        Student.acceptRequest(JSON.parse($scope.request), function(res) {
          console.log(res);
        });
      }
    }
  });
