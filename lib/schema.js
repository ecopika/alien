/**
 * Created by ecopika on 10/07/17.
 */
prod = "productes";


productes = new Mongo.Collection(prod);

//https://github.com/aldeed/meteor-autoform#custom-input-types
//https://atmospherejs.com/yogiben/autoform-file

var fullPath = Meteor.absoluteUrl();
var imagesProductPath = fullPath + "public/images/products/";

console.log(process.env.PWD + "/public/images/products/");
Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: process.env.PWD + "/public/images/products/"})]
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


Meteor.methods({
   'file-upload': function (fileInfo, fileData) {
      console.log("received file " + fileInfo.name + " data: " + fileData);
      fs.writeFile(fileInfo.name, fileData);
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

Images.allow({
  insert: function () {
    // add custom authentication code here
    return true;
  }
});