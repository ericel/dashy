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
	    }
	  ];
	  return Markers;
	})

.controller('MainCtrl', function ($scope, employees, Markers, $interval) {
	var _this = this;
    employees.getEmployees().then(function(data) {
		_this.items = data;
	    $scope.items = _this.items;
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
   console.log(employeesArray);
	  $scope.map = { 
	    center: { latitude: 39.8282, longitude: -98.5795 }, 
	    zoom: 4 
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
        isStacked: true,
        hAxis: {title: 'employees Number', titleTextStyle: {color: 'red'}},
        colors: ['#0E5660','#70ABAF'],
        hAxis : {gridlines : {count: 1}},
        hAxis : {viewWindowMode : 'explicit'},
        hAxis : {viewWindow : {max : 100}},
        is3D:true,
        vAxis: {
          title: 'Country'
        }
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


	       $scope.options = {
      scales: {
        xAxes: [{
          display: false,
          ticks: {
            max: 125,
            min: -125,
            stepSize: 10
          }
        }],
        yAxes: [{
          display: false,
          ticks: {
            max: 125,
            min: -125,
            stepSize: 10
          }
        }]
      }
    };

    createChart();
    $interval(createChart, 2000);

    function createChart () {
      $scope.series = [];
      $scope.data = [];
      for (var i = 0; i < 50; i++) {
        $scope.series.push(`Series ${i}`);
        $scope.data.push([{
          x: randomScalingFactor(),
          y: randomScalingFactor(),
          r: randomRadius()
        }]);
      }
    }

    function randomScalingFactor () {
      return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
    }

    function randomRadius () {
      return Math.abs(randomScalingFactor()) / 4;
    }



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

