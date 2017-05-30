import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './templates/fixes/header.html';
import './templates/principal/carrousel.html';

//equivalent al onReady de jquery
Template.header.onRendered(function(){

	changeNavInScroll();	

});

Template.carrousel.helpers({
	carouselItems:[
		{imageUrl:"public/images/home-0-slide-7c.jpg"},
		{imageUrl:"public/images/home-0-slide-7c.jpg"},
		{imageUrl:"public/images/home-0-slide-7c.jpg"}


	]
});

Template.carouselList.onRendered(function(){

});

/* BRING TOP    */

$(function(){

	$(document).on( 'scroll', function(){

		if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});
});

$(function(){

	$(document).on( 'scroll', function(){

		if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});

	$('.scroll-top-wrapper').on('click', scrollToTop);
});

function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}




/**************************************/


function changeNavInScroll(){
	
	var scroll_start = 0;
	var startchange = $('#startchange');
	var offset = startchange.offset();
	if(startchange.length){
		$(document).scroll(function(){
			scroll_start = $(this).scrollTop();
			if(scroll_start > offset.top){
				$(".navbar").css('background-color','#FFF');
			}else{
				$(".navbar").css('background-color','transparent');
			}
	

		});

	}


}
