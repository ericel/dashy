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

.controller('MainCtrl', function ($scope, employees, Markers, $interval) {
	var _this = this;
    employees.getEmployees().then(function(data) {
		_this.items = data;
	    $scope.items = _this.items;
      console.log(_this.items.countries.country);
     var employeesArray = _this.items.countries.map(function(v) {
		  return [v.country, v.employ_count];
		});
     var issuesArray = _this.items.issues.map(function(v) {
		  return [v.country, v.employ_count, v.allissues, v.open_issues, v.closed_issues];
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


	$scope.labels = ["Cameroon", "united States", "France", "Germany", "Australia", "Russia", "Brazil"];
  $scope.series = ['Employees', 'Issues', 'Open Issues', 'Closed Issues'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90],
    [38, 9, 50, 78, 43, 60, 50],
    [20, 6, 8, 15, 12, 3, 10]
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
var count = 0,
	max = 1029;
var inTv = setInterval(function(){startCount()},10);
function startCount()
{
    if(count == max) {
        clearInterval(inTv);
    } else {
        count++;
    }
    
    $('.stats_em').text(count); 
}

