'use strict';

angular.module('hrr10MjbeApp')
  .service('Teacher', function($http, Auth) {

    var user, activeClass;
    Auth.getCurrentUser(null).then(function(res) {
      user = res;
    });

    this.save = function() {
      User.update({}, user, function(res) {
        user.teacherData = res.teacherData;
      }, function(err) {
        console.log('Error updating user');
      });
    }

    this.setClass = function(id) {
      for (var i = 0; i < user.teacherData.classes.length; i++) {
        if (user.teacherData.classes[i]._id === id) {
          return activeClass = user.teacherData.classes[i];
        }
      }
    }

    this.getActiveClass = function() {
      return activeClass;
    }

    this.addClass = function() {

    }

    this.removeClass = function() {

    }

    this.getStudent = function(id) {

    }

    this.get

    this.sendInvite = function(email, classId, cb) {
      $http({
        method: 'POST',
        url: '/api/users/invite',
        data: {
          email: email,
          class: classId
        }
      }).then(function successCallback(response) {
        cb(response.status);
      }, function errorCallback(response) {
        cb(response.status);
      });
    }

    this.refresh();
  });
