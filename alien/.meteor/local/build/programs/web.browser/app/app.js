var require = meteorInstall({"client":{"templates":{"fixes":{"template.footer.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// client/templates/fixes/template.footer.js                                        //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
                                                                                    // 1
Template.__checkName("footer");                                                     // 2
Template["footer"] = new Template("Template.footer", (function() {                  // 3
  var view = this;                                                                  // 4
  return HTML.Raw("<footer>\n<h1>Dades del footer</h1>\n</footer>");                // 5
}));                                                                                // 6
                                                                                    // 7
//////////////////////////////////////////////////////////////////////////////////////

},"header.html":["./template.header.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// client/templates/fixes/header.html                                               //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
module.exports = require("./template.header.js");                                   // 1
                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////

}],"template.header.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// client/templates/fixes/template.header.js                                        //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
                                                                                    // 1
Template.__checkName("header");                                                     // 2
Template["header"] = new Template("Template.header", (function() {                  // 3
  var view = this;                                                                  // 4
  return HTML.Raw('<header class="text-center pagination-centered">\n    <nav class="navbar navbar-fixed-top " role="navigation">\n<div class="navbar-header">\n\t<ul>\n       <li> <a class="navbar-brand" href="/">HOME</a></li>\n      <li>  <a class="navbar-brand" href="/">PRODUCTS</a></li>\n      <li>  <a class="navbar-brand" href="/">ABOUT US</a></li>\n       <li><a class="navbar-brand" href="/">SHOP</a></li>\n      <li><a class="navbar-brand" href="/">CARRITO</a></li>\n\t</ul>\n\t</div>\n      </nav>\n<div id="startchange" hidden=""></div>\n\t<br>\n</header>');
}));                                                                                // 6
                                                                                    // 7
//////////////////////////////////////////////////////////////////////////////////////

},"template.socialMedia.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// client/templates/fixes/template.socialMedia.js                                   //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
                                                                                    // 1
Template.__checkName("socialMedia");                                                // 2
Template["socialMedia"] = new Template("Template.socialMedia", (function() {        // 3
  var view = this;                                                                  // 4
  return HTML.Raw('<div id="socialMedia">\n\t<h1>Xarxes Socials</h1>\n\n</div>');   // 5
}));                                                                                // 6
                                                                                    // 7
//////////////////////////////////////////////////////////////////////////////////////

}},"principal":{"template.bestSellers.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// client/templates/principal/template.bestSellers.js                               //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
                                                                                    // 1
Template.__checkName("bestSellers");                                                // 2
Template["bestSellers"] = new Template("Template.bestSellers", (function() {        // 3
  var view = this;                                                                  // 4
  return HTML.Raw('<div id="bestSellers">\n\n\t<h1>Més venuts</h1>\n\n</div>');     // 5
}));                                                                                // 6
                                                                                    // 7
//////////////////////////////////////////////////////////////////////////////////////

},"carrousel.html":["./template.carrousel.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// client/templates/principal/carrousel.html                                        //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
module.exports = require("./template.carrousel.js");                                // 1
                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////

}],"template.carrousel.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// client/templates/principal/template.carrousel.js                                 //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
                                                                                    // 1
Template.__checkName("carrousel");                                                  // 2
Template["carrousel"] = new Template("Template.carrousel", (function() {            // 3
  var view = this;                                                                  // 4
  return HTML.Raw('<div id="carrousel">\n\t<h1>Carrousel d\'Imatges</h1>\n</div>');
}));                                                                                // 6
                                                                                    // 7
//////////////////////////////////////////////////////////////////////////////////////

},"template.info.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// client/templates/principal/template.info.js                                      //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
                                                                                    // 1
Template.__checkName("info");                                                       // 2
Template["info"] = new Template("Template.info", (function() {                      // 3
  var view = this;                                                                  // 4
  return HTML.Raw('<div id="info">\n\t<h1>Informació empresa</h1>\n</div>');        // 5
}));                                                                                // 6
                                                                                    // 7
//////////////////////////////////////////////////////////////////////////////////////

},"template.marks.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// client/templates/principal/template.marks.js                                     //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
                                                                                    // 1
Template.__checkName("marks");                                                      // 2
Template["marks"] = new Template("Template.marks", (function() {                    // 3
  var view = this;                                                                  // 4
  return HTML.Raw('<div id="marks">\n\t<h1>Marques</h1>\n</div>');                  // 5
}));                                                                                // 6
                                                                                    // 7
//////////////////////////////////////////////////////////////////////////////////////

},"template.offerts.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// client/templates/principal/template.offerts.js                                   //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
                                                                                    // 1
Template.__checkName("offerts");                                                    // 2
Template["offerts"] = new Template("Template.offerts", (function() {                // 3
  var view = this;                                                                  // 4
  return HTML.Raw('<div id="offerts">\n\t<h1>Ofertes</h1>\n</div>');                // 5
}));                                                                                // 6
                                                                                    // 7
//////////////////////////////////////////////////////////////////////////////////////

},"template.walkerStory.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// client/templates/principal/template.walkerStory.js                               //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
                                                                                    // 1
Template.__checkName("walkerStory");                                                // 2
Template["walkerStory"] = new Template("Template.walkerStory", (function() {        // 3
  var view = this;                                                                  // 4
  return HTML.Raw('<div id="walkerStory">\n\t<h1>Walker Story</h1>\n\n</div>');     // 5
}));                                                                                // 6
                                                                                    // 7
//////////////////////////////////////////////////////////////////////////////////////

}}},"main.html":["./template.main.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// client/main.html                                                                 //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
module.exports = require("./template.main.js");                                     // 1
                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////

}],"template.main.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// client/template.main.js                                                          //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
                                                                                    // 1
Template.body.addContent((function() {                                              // 2
  var view = this;                                                                  // 3
  return [ Spacebars.include(view.lookupTemplate("header")), "\n", HTML.DIV({       // 4
    class: "container"                                                              // 5
  }, "\n\t", Spacebars.include(view.lookupTemplate("carrousel")), "\n\t", Spacebars.include(view.lookupTemplate("marks")), "\n\t", Spacebars.include(view.lookupTemplate("bestSellers")), "\n\t", Spacebars.include(view.lookupTemplate("offerts")), "\n\t", Spacebars.include(view.lookupTemplate("walkerStory")), "\n\t", Spacebars.include(view.lookupTemplate("info")), "\n\t", Spacebars.include(view.lookupTemplate("socialMedia")), "\n    ", HTML.Raw('<div id="main">\n    </div>'), "\n  "), "\n", Spacebars.include(view.lookupTemplate("footer")) ];
}));                                                                                // 7
Meteor.startup(Template.body.renderToDocument);                                     // 8
                                                                                    // 9
//////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/templating","meteor/reactive-var","./main.html","./templates/fixes/header.html","./templates/principal/carrousel.html",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// client/main.js                                                                   //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
var Template = void 0;                                                              // 1
module.importSync("meteor/templating", {                                            // 1
	Template: function (v) {                                                           // 1
		Template = v;                                                                     // 1
	}                                                                                  // 1
}, 0);                                                                              // 1
var ReactiveVar = void 0;                                                           // 1
module.importSync("meteor/reactive-var", {                                          // 1
	ReactiveVar: function (v) {                                                        // 1
		ReactiveVar = v;                                                                  // 1
	}                                                                                  // 1
}, 1);                                                                              // 1
module.importSync("./main.html");                                                   // 1
module.importSync("./templates/fixes/header.html");                                 // 1
module.importSync("./templates/principal/carrousel.html");                          // 1
//equivalent al onReady de jquery                                                   // 8
Template.header.onRendered(function () {                                            // 9
	changeNavInScroll();                                                               // 11
});                                                                                 // 13
                                                                                    //
function changeNavInScroll() {                                                      // 17
	var scroll_start = 0;                                                              // 19
	var startchange = $('#startchange');                                               // 20
	var offset = startchange.offset();                                                 // 21
                                                                                    //
	if (startchange.length) {                                                          // 22
		$(document).scroll(function () {                                                  // 23
			scroll_start = $(this).scrollTop();                                              // 24
                                                                                    //
			if (scroll_start > offset.top) {                                                 // 25
				$(".navbar").css('background-color', '#FFF');                                   // 26
			} else {                                                                         // 27
				$(".navbar").css('background-color', 'transparent');                            // 28
			}                                                                                // 29
		});                                                                               // 32
	}                                                                                  // 34
}                                                                                   // 37
//////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css"]});
require("./client/templates/fixes/template.footer.js");
require("./client/templates/fixes/template.header.js");
require("./client/templates/fixes/template.socialMedia.js");
require("./client/templates/principal/template.bestSellers.js");
require("./client/templates/principal/template.carrousel.js");
require("./client/templates/principal/template.info.js");
require("./client/templates/principal/template.marks.js");
require("./client/templates/principal/template.offerts.js");
require("./client/templates/principal/template.walkerStory.js");
require("./client/template.main.js");
require("./client/main.js");