import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
  // code to run on server at startup
    const productes = new Mongo.Collection('productes');
    productes.schema  = new SimpleSchema({
        _id :{type:String},
        nom: {type: String},
        unitats: {type: Number},
        descripcio: { type: String},
        imatges:{type: [String]},
        material:{type:String},
        valoracio:{type:Number}
    });

    if (productes.find().count() == 0) {
        productes.insert({_id:'CAMISA1',nom:'Camisa hombre',imatges:['shop-1-image-1a-626x798.jpg']})
        console.log("S'HA CREAT LA CAMISA 1");
    }else{
        console.log("EXISTEIX LA CAMISA 1: "+productes.findOne({_id:'CAMISA1'}).nom);
    }


});
