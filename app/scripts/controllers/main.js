'use strict';

/**
 * @ngdoc function
 * @name dashyAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dashyAppApp
 */
angular.module('dashyAppApp')
.controller('MainCtrl', function ($scope, employees,  $interval, $timeout) {
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

  employeesArray.insert(0, ['Locale', 'Count']);
  issuesArray.insert(0, ['Locale', 'Count', 'Issues', 'Open Issues', 'Closed Issues']);
  
    var chart1 = {};
   
    chart1.type = "GeoChart";
   
    chart1.data = employeesArray;
    
    chart1.options = {
      width: '100%',
      height: 300,
      chartArea: {left:10,top:10,bottom:0,height:"100%"},
      colorAxis: {colors: ['#70ABAF', '#0E5660']},
      displayMode: 'world',
      //colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
        backgroundColor: '#f5f5f5',
        datalessRegionColor: '#3a3633',
        defaultColor: '#f5f5f5'
    };



    chart1.formatters = {
      number : [{
        columnNum: 1,
        pattern: " #,##0.00"
      }]
    };

    $scope.chart = chart1;


  $scope.labelspie = countrysArray;
  $timeout(function () {$scope.datapie = employ_countsArray; }, 900);


  $scope.labels = countrysArray;
  $scope.series = ['Employees', 'Issues', 'Open Issues', 'Closed Issues', 'Some'];
 
  $timeout(function () {
   $scope.data = [
    
    employ_countsArray,
    allissuesArray,
    openISsArray,
    closedISsArray,
  ];}, 500);

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
 
$scope.orderProp = 's_time';

    });
    } 
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

      $scope.responseDataCsv = $scope.dataList;
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
  $scope.labelsopen = countrysArray;
  $timeout(function () {
    $scope.dataopen = allissuesArray;
    }, 900);

 $.fn.countTo = function(arrNums){
   var self = this;
   function add(a,b){
       return a+b;  
   }
  
   var current = 0;
   var max = arrNums.reduce(add,0);
  
   var int = setInterval(function(){
       if(current == max)
         clearInterval(int);
       else
         current++;
     
     self.text(current);
   },50);
  return this;
}

$('.stats_em').countTo(employ_countsArray);
$('.stats_iss').countTo(allissuesArray);
$('.stats_open').countTo(openISsArray);
$('.stats_cl').countTo(closedISsArray);
$('.stats_py').countTo(payin_custArray);
$('.stats_cu').countTo(payin_custArray);
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


