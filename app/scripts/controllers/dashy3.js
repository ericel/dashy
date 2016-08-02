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

/*var headertext = [];
var headers = document.querySelectorAll("thead");
var tablebody = document.querySelectorAll("tbody");

for (var i = 0; i < headers.length; i++) {
  headertext[i]=[];
  for (var j = 0, headrow; headrow = headers[i].rows[0].cells[j]; j++) {
    var current = headrow;
    headertext[i].push(current.textContent);
    }
} 

for (var h = 0, tbody; tbody = tablebody[h]; h++) {
  for (var i = 0, row; row = tbody.rows[i]; i++) {
    for (var j = 0, col; col = row.cells[j]; j++) {
      col.setAttribute("data-th", headertext[h][j]);
    } 
  }
}*/