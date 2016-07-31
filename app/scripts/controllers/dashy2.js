'use strict';

/**
 * @ngdoc function
 * @name dashyAppApp.controller:Dashy2Ctrl
 * @description
 * # Dashy2Ctrl
 * Controller of the dashyAppApp
 */
angular.module('dashyAppApp')
  .controller('Dashy2Ctrl', function ($scope, employees, $interval,  $timeout, $http) {
   	var _this = this;
  $scope.getData = function() { // getDATA function
    $http.get('./data/employee.json').then(function(response){
      $scope.responseData = response.data;
      _this.items = response.data;
    var countrysArray = _this.items.countries.map(function(v) {
      return v.country;
    });
    var employ_countsArray = _this.items.countries.map(function(v) {
      return v.employ_count;
    });
    var allissuesArray = _this.items.countries.map(function(v) {
      return v.allissues;
    });
    var openISsArray = _this.items.countries.map(function(v) {
      return v.open_issues;
    });
    var closedISsArray = _this.items.countries.map(function(v) {
      return v.closed_issues;
    });
     
     var employeesArray = _this.items.countries.map(function(v) {
      return [v.country, v.employ_count];
    });

     var issuesArray = _this.items.countries.map(function(v) {
      return [v.country, v.employ_count, v.allissues, v.open_issues, v.closed_issues];
    });

    var payin_custArray = _this.items.countries.map(function(v) {
      return v.payin_cust;
    });

    Array.prototype.insert = function (index, item) {
      this.splice(index, 0, item);
  };

  employeesArray.insert(0, ['Locale', 'Count']);
  issuesArray.insert(0, ['Locale', 'Count', 'Issues', 'Open Issues', 'Closed Issues']);


	  $scope.labelsperiod = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
	  $scope.seriesreported = ['Reported Issues'];
	  $timeout(function () {
	  	$scope.datareported = [

	    allissuesArray

	  ]; }, 100);


	  $scope.labels = countrysArray;
	  $scope.series = ['Employees', 'Issues', 'Open Issues', 'Closed Issues'];
	$interval(function(){   
  
    var num = Math.floor((Math.random() * 900) + 100);
    var numIs = Math.floor((Math.random() * 500) + 200);
    var numclIs = Math.floor((Math.random() * 700) + 50);
    var numemIs = Math.floor((Math.random() * 900) + 30);
    var numemIss = Math.floor((Math.random() * 511) + 110);

	  allissuesArray.splice(2, 1, num);
	  allissuesArray.splice(4, 1, numIs);
	  allissuesArray.splice(3, 1, numemIss);
	  allissuesArray.splice(5, 1, numemIs);
	  openISsArray.splice(4, 1, numIs);
	  openISsArray.splice(5, 1, numemIss);
	  openISsArray.splice(2, 1, num);
	  closedISsArray.splice(1, 1, numclIs);
	  employ_countsArray.splice(5, 1, numemIss);
	  employ_countsArray.splice(6, 1, num);
	  employ_countsArray.splice(4, 1, numIs);
	  employ_countsArray.splice(3, 1, numclIs);
	   }, 6000);
	 $timeout(function () {
	  $scope.data = [
	    employ_countsArray,
	    allissuesArray,
	    openISsArray,
	    closedISsArray
	  ];}, 100);
	  $scope.seriespaying_cust = ['Paying Customers'];
	   $timeout(function () {
	   	$scope.datapaying_cust = [
	    payin_custArray
	  ];
	  }, 500);

	  $timeout(function () {
	   	$scope.datapaying_cust = [
	    allissuesArray
	  ];
	  }, 2500);


	  $scope.onClick = function (points, evt) {
	    console.log(points, evt);
	  };
	  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
	  $scope.options = {
	    responsive : true,
	    maintainAspectRatio: false,
	    scales: {
	      yAxes: [
	        {
	          id: 'y-axis-1',
	          type: 'linear',
	          display: true,
	          position: 'left'

	        },
	        {
	          id: 'y-axis-2',
	          type: 'linear',
	          display: true,
	          position: 'right'
	        }
	      ]
	    }
	  };

	});
   } //end function

  $scope.getData();
  $interval(function(){
    $scope.getData();
  }, 9000);
  });
