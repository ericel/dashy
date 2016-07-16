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

