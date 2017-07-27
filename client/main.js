import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Meteor._reload.onMigrate(function() {
     return [false];
});
pathProdImages = "/products/";
pathPublicImages = "images";

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

Template.header.helpers({
	categorias:function () {
		return categories.find();
    },

});

Template.addProductForm.helpers({
	categorias:function () {
		return categories.find();
    },
	selected:function(){
		return categories.findOne({},{sort: {createdAt: 1}, limit: 1}).pictures[0];
	},
});

Template.carrousel.helpers({

//retorno les imatges de BD
	products:function(){
		var id = productes.findOne({},{sort: {createdAt: 1}, limit: 1})._id;
		return productes.find({_id:{$ne:id}});
	},

	firstImage:function(){
		return productes.findOne({},{sort: {createdAt: 1}, limit: 1}).pictures[0];
	},

});

/*formulari per afegir productes **/
var pics = [];
Template.addProductForm.events({
	'submit form': function(e){
		e.preventDefault();

		var product = {
			nom:$(e.target).find('[name=prodName]').val(),
			unitats:$(e.target).find('[name=prodUnitats]').val(),
			descripcio:$(e.target).find('[name=prodDesc]').val(),
			material:$(e.target).find('[name=prodMaterial]').val(),
			valoracio:$(e.target).find('[name=prodValoracio]').val(),
			categories:$(e.target).find('[name=prodCat]').val(),
			pictures:pics
		}

		product._id = productes.insert(product);
	},
	'change .prodPictures': function(event, template) {
     FS.Utility.eachFile(event, function(file) {
     	//genero numero a l'atzar per a que no hi hagi repetició d'imatges
     	metaR = Math.floor((Math.random() * 100) + 1);
     	newFile = new FS.File(file);
     	meta = "meta-"+metaR;
     	newFile.metadata = {metaProd:meta};
     	newFile.url = ({auth:false});
     ids = Images.insert(newFile, function (err, fileObj) {
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
     //genero array per despres afegir les dades a la BD
     	pathSencer = pathPublicImages+pathProdImages+ids.collectionName+"-"+ids._id+"-"+ids.original.name;

		 pics.push(pathSencer);
    });


  }
});

//mostrar imatges pujades

Template.removeProduct.helpers({
	products:function(){
		return productes.find();
	}

});


/**************FI FORMULARI************/




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
