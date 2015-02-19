'use strict';

angular.module('myApp.controller', [])
    .controller('MainCtrl', function ($scope, messages) {

        $scope.test = "Hello world!";
        $scope.messages = messages;
    });
