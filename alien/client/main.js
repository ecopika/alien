import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './templates/fixes/header.html';
import './templates/principal/carrousel.html';

//equivalent al onReady de jquery
Template.header.onRendered(function(){

	changeNavInScroll();	

});



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
