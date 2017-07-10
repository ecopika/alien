/**
 * Created by ecopika on 10/07/17.
 */
prod = "productes";


productes = new Mongo.Collection(prod);

//https://github.com/aldeed/meteor-autoform#custom-input-types
//https://atmospherejs.com/yogiben/autoform-file


Meteor.methods({
   addProductData: function(doc){
       console.log("Afegint producte!",doc);
       check(doc,productes.SimpleSchema());
       productes.insert(doc,function(err,docID){console.log("DOCID: ",docID)});
   }
});


productes.Schema = new SimpleSchema({
    _id: {type: String},
    nom: {type: String},
    unitats: {type: Number},
    descripcio: {type: String},
    material: {type: String},
    valoracio: {type: Number},
    pictures: {type: [String] },
});



productes.allow({
    insert:function () {
        return true;
    },
    remove:function () {
        return true;
    }
});
