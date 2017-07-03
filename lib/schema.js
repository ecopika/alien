/**
 * Created by pol.bieto on 29/06/2017.
 */

import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform'])

//https://github.com/aldeed/meteor-autoform#custom-input-types
//https://atmospherejs.com/yogiben/autoform-file







schemaproducts = new SimpleSchema({
    _id: {type: String},
    nom: {type: String},
    unitats: {type: Number},
    descripcio: {type: String},
    imatges: {type: Array},
    material: {type: String},
    valoracio: {type: Number},
    pictures: {
        type: 'String',
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Images',
                label:"Choose File"
            }
        }
    }
});
productes = new Mongo.Collection('productes');
productes.schema  = schemaproducts;



