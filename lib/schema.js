/**
 * Created by pol.bieto on 29/06/2017.
 */

import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform'])
schemaproducts = new SimpleSchema({
    _id :{type:String},
    nom: {type: String},
    unitats: {type: Number},
    descripcio: { type: String},
    imatges:{type: Array},
    material:{type:String},
    valoracio:{type:Number}
});
productes = new Mongo.Collection('productes');
productes.schema  = schemaproducts;


