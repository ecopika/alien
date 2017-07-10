import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';



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

});

Template.carrousel.helpers({
	carouselItems:[
		{imageUrl:"public/images/home-0-slide-7c.jpg"},
		{imageUrl:"public/images/home-0-slide-7c.jpg"},
		{imageUrl:"public/images/home-0-slide-7c.jpg"}


	]
});

Template.addProductForm.events({
	'submit form': function(e){
		e.preventDefault();
		var product = {
			nom:$(e.target).find('[name=prodName]').val(),
			unitats:$(e.target).find('[name=prodUnitats]').val(),
			descripcio:$(e.target).find('[name=prodDesc]').val(),
			material:$(e.target).find('[name=prodMaterial]').val(),
			valoracio:$(e.target).find('[name=prodValoracio]').val(),
			pictures:['shop-1-image-1a-626x798.jpg']
		}

		product._id = productes.insert(product);
	}
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
