'use strict';

/**
 * @ngdoc function
 * @name dashyAppApp.controller:Dashy3Ctrl
 * @description
 * # Dashy3Ctrl
 * Controller of the dashyAppApp
 */

angular.module('dashyAppApp')
  .controller('Dashy3Ctrl', function ($scope, employees, $http, $interval) {
   var _this = this;


  $scope.getData = function() { // getDATA function
    $http.get('./data/employee.json').then(function(response){
		_this.items = response.data;
		$scope.items = _this.items;
	});
  }// End getDATA function
  $scope.getData();
  /*$interval(function(){
    $scope.getData();
  }, 10000);*/

});
