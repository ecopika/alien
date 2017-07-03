import { Meteor } from 'meteor/meteor';;

Meteor.startup(() => {

Images = new FS.Collection("images", {
    stores: [new FS.Store.GridFS("images", {})]
});
    Images.allow({
    'insert': function(userId, doc) {
        return true;
    },
    'download': function(userId) {
        return true;
    }
});


    // code to run on server at startup
    if (productes.find().count() == 0) {

        productes.insert({_id:'CAMISA1',nom:'Camisa hombre',imatges:['shop-1-image-1a-626x798.jpg']})
        console.log("S'HA CREAT LA CAMISA 1");
       // productes.insert({_id:'CAMISA1',nom:'Camisa hombre',imatges:['shop-1-image-1a-626x798.jpg']})
       // console.log("S'HA CREAT LA CAMISA 1");
    }else{
       // console.log("EXISTEIX LA CAMISA 1: "+productes.findOne({_id:'CAMISA1'}).nom);
    }

    Meteor.publish('images', function() {
        return Images.find();
    });


});