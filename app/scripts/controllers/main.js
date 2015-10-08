'use strict';

/**
 * @ngdoc function
 * @name shuntNgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shuntNgApp
 */
angular.module('shuntNgApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
