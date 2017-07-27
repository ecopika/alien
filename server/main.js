import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

      // code to run on server at startup
    if (productes.find().count() == 0) {

        productes.insert({_id:'CAMISA1',nom:'Camisa hombre',unitats:4,descripcio:"Samarreta negra",material:"Nylon",valoracio:4,pictures:'shop-1-image-1a-626x798.jpg'})
        console.log("S'HA CREAT LA CAMISA 1");
       productes.insert({_id:'CAMISA1',nom:'Camisa hombre',imatges:['shop-1-image-1a-626x798.jpg']})
       // console.log("S'HA CREAT LA CAMISA 1");
    }else{
        console.log("EXISTEIX LA CAMISA 1: "+productes.findOne({_id:'y2eyXmEbbSbpziwjY'}).nom);
    }

    if(categories.find().count() == 0){
        categories.insert({nom:"Verano"});
        categories.insert({nom:"Invierno"});
        categories.insert({nom:"Sudaderas"});
        categories.insert({nom:"Manga Corta"});
        categories.insert({nom:"Manga Larga"});
        categories.insert({nom:"Pantalones"});

    }

});
