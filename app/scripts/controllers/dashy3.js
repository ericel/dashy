'use strict';

/**
 * @ngdoc function
 * @name dashyAppApp.controller:Dashy3Ctrl
 * @description
 * # Dashy3Ctrl
 * Controller of the dashyAppApp
 */
angular.module('dashyAppApp')
  .controller('Dashy3Ctrl', function ($scope, employees) {
   var _this = this;
    employees.getEmployees().then(function(data) {
		_this.items = data;
		$scope.items = _this.items;
	});
  });
$("#querydatatablesets").css("width","100%");