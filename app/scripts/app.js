'use strict';

/**
 * @ngdoc overview
 * @name dashyAppApp
 * @description
 * # dashyAppApp
 *
 * Main module of the application.
 */
angular
  .module('dashyAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch'
  ]);

  var toggle_btn = $('.toggle-side');
  /*toggle_btn.click(function() {
    alert( "Handler for .click() called." );
  });
*/
if(!$('.menu li span').hasClass('closed')){
 		$(".menu li").find('span').addClass('closed');
		$('.menu li').mouseenter(function() {
		    $(this).find('.closed').show();
		  })
		 $('.menu li ').mouseleave(function() {
		   $(this).find('.closed').hide();
		  });
 	} 
   
 	$(".icon-menu").click(function() {

 	if($("body").hasClass("opened")){
 		$(".menu").animate({
 			width: "59px"
 		}, 300);
 		$(".container").animate({
 			paddingLeft: "10px"
	 	}, 300);
 		$("body").removeClass('opened');
 		$(".menu li").find('span').addClass('closed');
 		$('.menu li').find('span').hide();	
 		
 	}else{
 		$(".menu").animate({
 			width: "193px"
	 	}, 300);
	 	$(".container").animate({
 			paddingLeft: "150px"
	 	}, 300);
	 		$("body").addClass('opened');
	 		$(".menu li").find('span').removeClass('closed');
 			$('.menu li span').show();
	 	}
	 	return false;
 	});

	$('.searchbtn').click(function() {
			
        $('.searchform').toggle('slide');
	
	});

   
	$('html').click(function() {
		//Hide the menus if visible
		if($("body").hasClass("opened")){
	 		$(".menu").animate({
	 			width: "59px"
	 		}, 300);
	 		$(".container").animate({
 			paddingLeft: "10px"
	 		}, 300);
	 		$("body").removeClass('opened');
	 		$(".menu li").find('span').addClass('closed');
	 		$('.menu li').find('span').hide();	
	 	} 
	 	
	});


