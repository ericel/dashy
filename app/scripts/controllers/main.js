'use strict';

/**
 * @ngdoc function
 * @name dashyAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dashyAppApp
 */
angular.module('dashyAppApp')
	.factory("Markers", function(){
	  var Markers = [
	    {
	      "id": "0",
	      "coords": {
	        "latitude": "45.5200",
	        "longitude": "-122.6819"
	      },
	      "window": {
	        "title": "Portland, OR"
	      }
	    },
	    {
	      "id": "1",
	      "coords": {
	        "latitude": "40.7903",
	        "longitude": "-73.9597"
	      },
	      "window" : {
	        "title": "Manhattan New York, NY"
	      }
	    },
      {
        "id": "3",
        "coords": {
          "latitude": "3.848032",
          "longitude": "11.502075"
        },
        "window" : {
          "title": "Joseph T A, Yaounde"
        }
      },
      {
        "id": "4",
        "coords": {
          "latitude": "51.048615",
          "longitude": "-114.070846"
        },
        "window" : {
          "title": "4 St SW, Calgary"
        }
      },
      {
        "id": "5",
        "coords": {
          "latitude": "-14.235004",
          "longitude": "-51.925280"
        },
        "window" : {
          "title": "Banco De, Brazil"
        }
      },
      {
        "id": "6",
        "coords": {
          "latitude": "31.230416",
          "longitude": "121.473701"
        },
        "window" : {
          "title": "Shanghai, China"
        }
      },
      {
        "id": "7",
        "coords": {
          "latitude": "55.755826",
          "longitude": "37.617300"
        },
        "window" : {
          "title": "Moscow, Russia"
        }
      },
      {
        "id": "8",
        "coords": {
          "latitude": "52.520007",
          "longitude": "13.404954"
        },
        "window" : {
          "title": "Berlin, Germany"
        }
      },
      {
        "id": "8",
        "coords": {
          "latitude": "-33.868820",
          "longitude": "151.209296"
        },
        "window" : {
          "title": "Sydney, Australia"
        }
      }
	  ];
	  return Markers;
	})

.controller('MainCtrl', function ($scope, employees, Markers, $interval, $timeout) {
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

    var payin_custArray = _this.items.issues.map(function(v) {
      return v.payin_cust;
    });

    Array.prototype.insert = function (index, item) {
		  this.splice(index, 0, item);
	};

	employeesArray.insert(0, ['Locale', 'Count']);
	issuesArray.insert(0, ['Locale', 'Count', 'Issues', 'Open Issues', 'Closed Issues']);
  
	  $scope.map = { 
	    center: { latitude: 39.8282, longitude: -98.5795 }, 
	    zoom: 1
	  };
	  $scope.markers = Markers;

	  var chart1 = {};
	  var chart2 = {};
	  var chart3 = {};
	  var chart4 = {};
	  chart1.type = "GeoChart";
	  chart2.type = "BarChart";
	  chart3.type = "AreaChart";
	  chart4.type = "ComboChart";
	  chart1.data = employeesArray;
	 
	  chart2.data = employeesArray;

	  chart3.data = employeesArray;

	  chart4.data = issuesArray;
    
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

	  chart2.options = {
	  	title: 'Number of employees at various company locations',
        chartArea: {width: '70%', height: '100%',top:30,bottom:0},
        //isStacked: true,
        hAxis: {title: 'employees Number', titleTextStyle: {color: 'red'}},
        colors: ['#0E5660','#70ABAF'],
        //hAxis : {gridlines : {count: 1}},
        //hAxis : {viewWindowMode : 'explicit'},
        //hAxis : {viewWindow : {max : 100}},
        is3D:true,
        /*vAxis: {
          title: 'Country'
        }*/
      };

      chart3.options = {
          title: 'Company Performance',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };
    chart4.options = {
      width: 400,
      height: 240,
      animation:{
        duration: 1000,
        easing: 'out',
      },
      vAxis: {minValue:0, maxValue:1000}
     };

	  chart1.formatters = {
	    number : [{
	      columnNum: 1,
	      pattern: " #,##0.00"
	    }]
	  };

	  $scope.chart = chart1;
	  $scope.chart2 = chart2;
	  $scope.chart3 = chart3;
	  $scope.chart4 = chart4;


	$scope.labels = countrysArray;
  $scope.series = ['Employees', 'Issues', 'Open Issues', 'Closed Issues', 'Some'];
  var arr = [];
  $interval(function(){   
    var max = 208,
    min = 200;
    /*for (var i=200, t=208; i<t; i++) {
        arr.push(Math.round(Math.random() * (t - min) + min));
    }*/
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
   }, 3500);

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
   },100);
  return this;
}


$('.stats_em').countTo(employ_countsArray);
$('.stats_iss').countTo(allissuesArray);
$('.stats_open').countTo(openISsArray);
$('.stats_cl').countTo(closedISsArray);
$('.stats_py').countTo(payin_custArray);
$('.stats_cu').countTo(payin_custArray);



//datatables
$scope.orderProp = 's_time';
//$scope.quantity = 5;

});

    //$scope.percenteasy = 65;
        $scope.optionseasy = {
            animate:{
                duration:1000,
                enabled:true
            },
            barColor:'#2C3E50',
            scaleColor:false,
            lineWidth:9,
            lineCap:'circle'
        };
 
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

