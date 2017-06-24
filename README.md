# alien
A-lien app
In development by (Pol, Andreu, Dani)

TUTORIAL IRON ROUTER

Si per exemple volem que s'obri algun dels productes a partir del seu ID.
    www.alien.com/products/<id_product>
on <id_product> es un identificador del producte desat a MongoDB.

VOCABULARI ROUTER

  **Routes: Consjunt d'instruccions que li diuen a l'aplicació a on anar i que fer quan es troba amb una URL.
  
  **Paths: Pot ser estàtica (/about_us) o dinàmica (/products/<id_product>) i també pot incloure paràmetres de consulta
  (/search?product=id)
  
  **Segments: Les diferents parts d'un path, delimitades per (/)
  
  **Hooks: Accions que ens agradaria fer abans, després o durant el procès d'enrutament. Per exemple comprobar si l'usuari té 
  les credencials adecuades abans de mostrar la pàgina.
  
  **Filters: Són hooks o accions que es defineixen de forma global per a una o més rutes.
  
  **Route Templates: Cada ruta ha d'apuntar a una plantilla, si no s'especifíca una, el router buscarà una plantilla amb el 
  mateix nom que la ruta per defecte.
  
  **Layouts: Es pot pensar en els layouts com si fossin "marcs" per al nostre contingut. Contenen el codi HTML que envolta la
  plantilla actual, i seguirà essent el mateix, encara que la plantilla canviî.
  
  **Controllers: En comptes de duplicar el codi, podem deixar que totes aquestes rutes heretin desde un sol controlador
  d'enrutament que contidrà tota la lògica necessària.
  
Iron Router ens permet prendre el control del contingut del que es mostra a l'etiqueta <body> de l'HTML.

Per der això en comptes de definit el contingur d'una pàgina com ho fariem habitualment, ho fem indicant al routes que apunti
a una plantilla especial que conté un ajudant {{>yield}}.
Aquest ajudant definirà una zona dinàmica especial que mostrarà automàticament el que correspon a la ruta actual. La zona 
dinàmica l'anomenem Route Template.

![Esq1](http://i.imgur.com/tS9ROyB.jpg)

Hem de crear el nostre layout, per tal de fer-ho intentem que el nostre main.html, es quedi buit, tansols amb el head.

El nostre fitxer layout contindrà el contingut fix, que volem que es vegi a tots els html's, i la part dinàmica.{{>yield}}
(fixeu-vos en el nostre fitxer layout.html, que es troba a client/templates/pages/layout.html)

Per a mapejar els coninguts dinàmics amb les seves url's corresponents, creem un fitxer lib/router.js a l'arrel del nostre
projecte. A dins hi definim:

'''javascript
    Router.configure({
        layoutTemplate: 'layout'
    });
    
    Router.route('/',{name:'nomPlantilla'});
'''

Aquí fem dues coses importants; primer li diguem al router que utilitzi el nostre layout com a predeterminat. Després li diguem que quan la URL es correspongui a '/' ens carregui la plantilla que li assignem.

**[TOT el que posem a la carpeta /lib es carregarà abans que qualsevol altra cosa. Com que la carpeta /lib no es a dins ni de /client ni de /server, els seus continguts estan disponibles per als dos entorns]

De moment hem vist com redireccionar i enrutar a pàgines estàtiques. Anem a veure com fer-ho per a que per exemple ens mostri
l'id de cada producte.

Per fer-ho necessitarem crear rutes de forma dinàmica.

Per al nostre cas per exemple, que volem mostrar el nom, o l'identificador de cada producte, haurem de fer el segûent:
    -Creem una plantilla amb el nom product_page.html, que mostra la informació del producte.
     client/templates/products/product_page.html
    -Afegim al fitxer lib/router.js el següent:
        '''javascript
            Router.route('products/:_id',{
                name:'productPage'
            });
         '''
La sitaxis especial (:\_id) ens diu dues coses al router; primer, que trobi qualsevol ruta de la forma /products/xyz/ , on "xyz" pot ser qualsevol cadena. La segona, posa tot el que troba dins de la propietat \_id al vector de paràmetres del router.

D'aquesta manera aconseguim que el router conegui l'id del producte que ens agradaria mostrar.
Ara bé, falta trobar com fer que la plantilla també conegui aquest id.

El router integra una sol·lució intel·ligent per aquest problema, permet especificar el context de dades d'una plantilla.

[esq2](http://i.imgur.com/Clh5bfB.jpg)

En el nostre cas, podem btenir el context de dades correcte mitjançant la cerca del nostre producte basat en l'\_id que rebem de la URL.

'''javascript
    Router.route('products/:_id,{
        name:'productPage',
        data: function(){ return Products.findOne(this.params.\_id);}
    });
    
'''

El this es correspon amb la ruta actual i podem emprar this.params per accedir a les propietats de la ruta.
    


