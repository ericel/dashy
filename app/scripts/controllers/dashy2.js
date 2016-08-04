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
  $scope.getDataMain = function() { // getDATA function
    employees.getEmployees().then(function(response){
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
     payin_custArray.splice(4, 1, numIs); 
      }, 10000);
  employeesArray.insert(0, ['Locale', 'Count']);
  issuesArray.insert(0, ['Locale', 'Count', 'Issues', 'Open Issues', 'Closed Issues']);


	  $scope.labelsperiod = ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'];
	  $scope.seriesreported = ['Reported Issues'];
	  $timeout(function () {
	  	$scope.datareported = [

	    allissuesArray

	  ]; }, 100);


	  $scope.labels = countrysArray;
	  $scope.series = ['Employees', 'Issues', 'Open Issues', 'Closed Issues'];

	 $timeout(function () {
	  $scope.data = [
	    employ_countsArray,
	    allissuesArray,
	    openISsArray,
	    closedISsArray
	  ];}, 100);
 
	 $timeout(function () {
	  $scope.dataopen = allissuesArray

	  }, 500);

	  $scope.seriespaying_cust = ['Paying Customers'];
	   $timeout(function () {
	   	$scope.datapaying_cust = [
	    payin_custArray
	  ];
	  }, 500);
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

  $scope.getDataMain();
  $scope.getDataCsv = function() {
 employees.getCountries().then(function(response){
  $scope.countriesData = response.data;
  var lines, lineNumber, data, length;
   $scope.dataList = [];
    lines = $scope.countriesData.split('\n');
    lineNumber = 0;
    for (var i = lines.length - 1; i >= 0; i--) {
        var l = lines[i];

        lineNumber++;
        data = l.split(',');

        var country = data[0];
        var employ_count = data[1];
        var allissues = data[2];
        var open_issues = data[3];
        var closed_issues = data[4];
        var manager = data[5];
        var commpanyname = data[6];
        var payin_cust = data[7];
        if (country != "" && country != "country"){
        $scope.dataList.push({
            country: country,
            employ_count: employ_count,
            allissues: allissues,
            open_issues: open_issues,
            closed_issues: closed_issues,
            manager: manager,
            commpanyname: commpanyname,
            payin_cust: payin_cust
        });
      }
    }

      $scope.responseData = $scope.dataList;
      _this.items = $scope.dataList;
    var countrysArray = _this.items.map(function(v) {
      return v.country;
    });
    var employ_countsArray = _this.items.map(function(v) {
      return v.employ_count;
    });
    
    var allissuesArray = _this.items.map(function(v) {
      return v.allissues;
    });
    var openISsArray = _this.items.map(function(v) {
      return v.open_issues;
    });
    var closedISsArray = _this.items.map(function(v) {
      return v.closed_issues;
    });
     
     var employeesArray = _this.items.map(function(v) {
      return [v.country, v.employ_count];
    });

     var issuesArray = _this.items.map(function(v) {
      return [v.country, v.employ_count, v.allissues, v.open_issues, v.closed_issues];
    });

    var payin_custArray = _this.items.map(function(v) {
      return v.payin_cust;
    });
    $scope.labelsradar = countrysArray;
    $timeout(function () {
	  $scope.dataradar = [
	    employ_countsArray,
	    allissuesArray,
	    openISsArray,
	    closedISsArray
	  ];}, 100);
});
}
 $scope.getDataCsv();
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

$scope.getDataCsvUp = function() { 
     return employees.getCountries().then(function(response) {
     
       return response.data;
     });

   } 

$scope.getDataCsvUp()
.then(function(data1csv){
   $scope.itemscsv = data1csv;
   $interval(function() {
     $scope.getDataCsvUp()
     .then(function(data2csv){
        
        if (!angular.equals($scope.itemscsv, data2csv)) {
           $scope.getDataCsv();
           console.log('There is a change in data file!');
           $scope.itemscsv  = data2csv;
        }
     });
   }, 5000);

});
  });
