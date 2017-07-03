import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


Meteor.subscribe("images");
Meteor.subscribe("productes");

//equivalent al onReady de jquery
Template.header.onRendered(function(){

	changeNavInScroll();
		$(document).on( 'scroll', function(){

		if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});

			$(document).on( 'scroll', function(){

		if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});

	$('.scroll-top-wrapper').on('click', scrollToTop);

    $('#add').on('click',function(e){
        $('#modalAfegirProducte').modal('show');
    });

});

Template.carrousel.helpers({
	carouselItems:[
		{imageUrl:"public/images/home-0-slide-7c.jpg"},
		{imageUrl:"public/images/home-0-slide-7c.jpg"},
		{imageUrl:"public/images/home-0-slide-7c.jpg"}


	]
});



/* BRING TOP    */


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
