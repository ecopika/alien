/**
 * Created by pol.bieto on 29/06/2017.
 */

import SimpleSchema from 'simpl-schema';
if (!Meteor.userId)
    Meteor.userId = function () {};
SimpleSchema.extendOptions(['autoform'])

prod = "productes";


productes = new Mongo.Collection(prod);

//https://github.com/aldeed/meteor-autoform#custom-input-types
//https://atmospherejs.com/yogiben/autoform-file


Meteor.methods({
   addProductData: function(doc){
       console.log("Afegint producte!",doc);
       //check(doc,productes.SimpleSchema());
       productes.insert(doc,function(err,docID){console.log("DOCID: ",docID)});
   }
});

productes.attachSchema(new SimpleSchema({
    _id: {type: String},
    nom: {type: String},
    unitats: {type: Number},
    descripcio: {type: String},
    material: {type: String},
    valoracio: {type: Number},
    pictures: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Images',
                label:"Choose File"
            }
        }
    }
}));

Images = new FS.Collection("images", {
    stores: [new FS.Store.GridFS("images", {})]
});
Images.allow({
    insert: function() {
        return true;
    },
    download: function() {
        return true;
    }
});

productes.allow({
    insert:function () {
        return true;
    },
    remove:function () {
        return true;
    }
});







