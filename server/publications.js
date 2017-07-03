/**
 * Created by ecopika on 3/07/17.
 */
    Meteor.publish('images', function() {
        return Images.find();
    });

    Meteor.publish('productes',function () {
        return productes.find();
    });