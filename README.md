# bsale-test
Bienvenidos a la aplicación BSALE.

La aplicación se encuentra alojada en: https://boiling-everglades-34988.herokuapp.com (toma unos 3 segundos en arrancar el dyno de heroku pues no es de pago).

Arquitectura:

Está hecha bajo la base de datos relacional MySQL y Node.js con Express para su backend. El frontend utiliza Vanilla JS junto con Bootstrap.

Utiliza un buscador que se implementó en el servidor, el cual realiza distintas llamadas a la base de datos.

Endpoints:

 - *GET '/data/'*

Entrega todos los productos de la tabla product utilizando la query `'SELECT * FROM product'`

- *GET '/data/:producto'*

Entrega rutas personalizadas para cada producto en base a la categoría a la que pertenecen, utilizando la query: `SELECT * from product WHERE category IN (SELECT id FROM category WHERE name = "${producto}")`

- *GET '/search'*

Realiza una búsqueda utilizando query strings en base al parámetro ingresado en el input search del lado del cliente. Su query es: `SELECT * FROM product WHERE name LIKE "%${producto}%"`

Para usar localmente, clone el repositorio en su equipo y en su terminal ejecute dentro de la ubicación del archivo los comdandos `npm install` para descargar los módulos necesarios.

Ante cualquier consulta no dude en contactar al desarrollador en: https://www.daniela-dev.cl