/**
 * Created by ecopika on 10/07/17.
 */
prod = "productes";
cat = "categories";
//Definicio de les coleccions, ho fem a schema, ja que aquest fitxer es compartit per client i servidor
categories = new Mongo.Collection(cat);
productes = new Mongo.Collection(prod);
/******************************************/

//definicio variables compartides
var fullPath = Meteor.absoluteUrl();
var imagesProductPath = fullPath + "public/images/products/";
/******************************************/
console.log(process.env.PWD + "/public/images/products/");
//colecció d'imatges
Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: process.env.PWD + "/public/images/products/"})]
});

//definició d'un esquema per a la coleccio productes
productes.Schema = new SimpleSchema({
    _id: {type: String},
    nom: {type: String},
    unitats: {type: Number},
    descripcio: {type: String},
    material: {type: String},
    valoracio: {type: Number},
    categories:{type:[String]},
    pictures: {type: [String] },
});

//definicio esquema per a categories
categories.Schema = new SimpleSchema({
    _id:{type:String},
    nom: {type:String},
});


Meteor.methods({
   'file-upload': function (fileInfo, fileData) {
      console.log("received file " + fileInfo.name + " data: " + fileData);
      fs.writeFile(fileInfo.name, fileData);
   }
});

//permisos per a la colecció productes
productes.allow({
    insert:function () {
        return true;
    },
    remove:function () {
        return true;
    }
});

categories.allow({
   insert:function () {
       return true;
   },
    remove:function(){
       return true;
    }
});


//permisos per a la colecció d'imatges
Images.allow({
  insert: function () {
    // add custom authentication code here
    return true;
  }
});