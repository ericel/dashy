'use strict';

 /**
  * @ngdoc function
  * @name dashyAppApp.controller:Dashy3Ctrl
  * @description
  * # Dashy3Ctrl
  * Controller of the dashyAppApp
 */

angular.module('dashyAppApp')
 .controller('Dashy3Ctrl', function($rootScope, $scope, employees, $interval)            {
 var _this = this;
 $scope.getDataMain = function() { 
    employees.getEmployees().then(function(response){
        $scope.responseData = response.data;
    });

  }
  $scope.getDataMain();
 $scope.getData = function() { 
     return employees.getEmployees().then(function(response) {
     
       return response.data;
     });

   } 

$scope.getData()
.then(function(data1){
   $scope.items = data1;
   $interval(function() {
     $scope.getData()
     .then(function(data2){
        
        if (!angular.equals($scope.items, data2)) {
           $scope.getDataMain();
           console.log('There is a change in data file!');
           $scope.items  = data2;
        }
     });
   }, 5000);

});

 });