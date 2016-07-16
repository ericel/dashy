'use strict';

/**
 * @ngdoc function
 * @name dashyAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dashyAppApp
 */
angular.module('dashyAppApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


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

