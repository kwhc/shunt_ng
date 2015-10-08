'use strict';

/**
 * @ngdoc function
 * @name shuntNgApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the shuntNgApp
 */
angular.module('shuntNgApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
