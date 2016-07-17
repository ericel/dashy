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

	.controller('MainCtrl', function ($scope, Markers) {
	  $scope.map = { 
	    center: { latitude: 39.8282, longitude: -98.5795 }, 
	    zoom: 4 
	  };
	  $scope.markers = Markers;

	  var chart1 = {};
	  var chart2 = {};
	  chart1.type = "GeoChart";
	  chart2.type = "BarChart";
	  chart1.data = [
	    ['Locale', 'Count', 'Percent'],
	    ['Germany', 269, 23],
	    ['United States', 738, 11],
	    ['Brazil', 937, 20],
	    ['Canada', 193, 32],
	    ['France', 83, 9],
	    ['RU', 58, 3],
	    ['Cameroon', 58, 3],
	    ['Australia', 958, 20]
	  ];

	  chart2.data = [
	    ['Locale', 'Count', 'Percent'],
	    ['Germany', 269, 23],
	    ['United States', 738, 11],
	    ['Brazil', 937, 20],
	    ['Canada', 193, 32],
	    ['France', 83, 9],
	    ['RU', 58, 3],
	    ['Cameroon', 58, 3],
	    ['Australia', 958, 20]
	  ];

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

	  chart1.formatters = {
	    number : [{
	      columnNum: 1,
	      pattern: " #,##0.00"
	    }]
	  };

	  $scope.chart = chart1;
	  $scope.chart2 = chart2;
      
        $scope.percenteasy = 65;
        $scope.optionseasy = {
            animate:{
                duration:20,
                enabled:true
            },
            barColor:'#2C3E50',
            scaleColor:false,
            lineWidth:5,
            lineCap:'circle',
            size: 60
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

