/**
 * Created by pol.bieto on 29/06/2017.
 */

import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform'])

//https://github.com/aldeed/meteor-autoform#custom-input-types
//https://atmospherejs.com/yogiben/autoform-file

/*
Images = new FS.Collection("images", {
    stores: [new FS.Store.GridFS("images", {})]
});

Images.allow({
    insert: function(userId, doc) {
        return true;
    },
    download: function(userId) {
        return true;
    }
});

Meteor.publish('images', function() {
    return Images.find();
});
*/
schemaproducts = new SimpleSchema({
    _id: {type: String},
    nom: {type: String},
    unitats: {type: Number},
    descripcio: {type: String},
    imatges: {type: Array},
    material: {type: String},
    valoracio: {type: Number},
    pictures: {
        type: Array,
        label: 'Choose file'
    },
    "pictures.$": {
        type: 'String',
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Images'
            }
        }
    }
});
productes = new Mongo.Collection('productes');
productes.schema  = schemaproducts;



