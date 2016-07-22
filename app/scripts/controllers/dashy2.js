'use strict';

/**
 * @ngdoc function
 * @name dashyAppApp.controller:Dashy2Ctrl
 * @description
 * # Dashy2Ctrl
 * Controller of the dashyAppApp
 */
angular.module('dashyAppApp')
  .controller('Dashy2Ctrl', function ($scope, employees, $interval,  $timeout) {
  	var _this = this;
    employees.getEmployees().then(function(data) {
		_this.items = data;
	    $scope.items = _this.items;
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
     var issuesArray = _this.items.issues.map(function(v) {
		  return [v.country, v.employ_count, v.allissues, v.open_issues, v.closed_issues];
		});
     var paying_custArray = _this.items.countries.map(function(v) {
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

	  ]; }, 500);


	  $scope.labels = countrysArray;
	  $scope.series = ['Employees', 'Issues', 'Open Issues', 'Closed Issues'];
	  $scope.data = [
	    employ_countsArray,
	    allissuesArray,
	    openISsArray,
	    closedISsArray
	  ];

	  $scope.seriespaying_cust = ['Paying Customers'];
	   $timeout(function () {
	   	$scope.datapaying_cust = [
	    paying_custArray
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
   
  });
