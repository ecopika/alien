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

![alt text](http://imgur.com/tS9ROyB)


