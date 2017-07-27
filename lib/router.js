/*en aquest fitxer definim les deiferents URL's de l'app */


Router.configure({
   layoutTemplate:'layout',
    loadingTemplate:'loading',


});


Router.route('/',{name:'index'});
Router.route('/add',{name: 'addProductForm'});
Router.route('/remove',{name: 'removeProduct'});
/*DINAMICA*/
Router.route('/category/:nom',{
    name:'category',
    data:function(){

       return{ prods:productes.find({categories:{$elemMatch:{$eq:this.params.nom}}}),cats:categories.findOne({nom:this.params.nom})}



    }
});