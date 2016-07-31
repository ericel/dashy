'use strict';

/**
 * @ngdoc function
 * @name dashyAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dashyAppApp
 */
angular.module('dashyAppApp')
.controller('MainCtrl', function ($scope, employees,  $interval, $timeout, $http) {
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
  $scope.datapie = employ_countsArray;


  $scope.labels = countrysArray;
  $scope.series = ['Employees', 'Issues', 'Open Issues', 'Closed Issues', 'Some'];
  $interval(function(){   
    
    var num = Math.floor((Math.random() * 900) + 100);
    var numIs = Math.floor((Math.random() * 500) + 200);
    var numclIs = Math.floor((Math.random() * 700) + 50);
    var numemIs = Math.floor((Math.random() * 900) + 30);
    var numemIss = Math.floor((Math.random() * 511) + 110);
    //$scope.arr = arr; 
  
   //arr.push(arr);
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
   }, 5000);
   $scope.data = [
    
    employ_countsArray,
    allissuesArray,
    openISsArray,
    closedISsArray,
  ];

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
      console.log(countrysArray);

//datatables
$scope.orderProp = 's_time';
//$scope.quantity = 5;
    });
    } // End getDATA function
  $scope.getData();
  $interval(function(){
    $scope.getData();
  }, 9000);

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

     var issuesArray = _this.items.issues.map(function(v) {
      return [v.country, v.employ_count, v.allissues, v.open_issues, v.closed_issues];
    });

    var payin_custArray = _this.items.issues.map(function(v) {
      return v.payin_cust;
    });
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
 
});

// create the custom `partyTime` event
/*  var myCustomEvent= new CustomEvent( 'partyTime', {timeToParty: true, partyYear: 1999} );
     var partyYear = 1999;
          // listen to the `document` for the `partyTime` event
          document.addEventListener('partyTime', function(evt) {
              if (evt.partyYear) {
                  console.log( "Partying like it's " + evt.partyYear + "!");
              }

              document.body.style.backgroundImage = 'linear-gradient(30deg, gray, white)';
     });
          // trigger the custom event
   document.dispatchEvent( myCustomEvent );
*/

