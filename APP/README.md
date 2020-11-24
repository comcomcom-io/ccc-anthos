# README #

This README would normally document whatever steps are necessary to get your application up and running.

Estructura del proyecto.

Communal Studio
-	App
-	Bower_components
-	Node_modules
-	Src
-	www

app
Carpeta depreciada. No se usa y no se debería de modificar.

bower_components
aquí se almacenan todos los paquetes instalados de bower. Aquellos que estén inyectados en el proyecto, Gulp inyecta las referencias automáticamente. Cada subcarpeta es un paquete y cada una tiene su archivo bower.json donde se especifica la versión que se esta utilizando.

node_modules
Aquí se almacenan todas las dependencias de node.js. Entre ellas la mas importante es gulp.

src 
Carpeta en la cual se desarrolla el proyecto. Su estructura será explicada a continuación.

-	Config
o	App.constants: Aquí se almacenan constantes. Las mas importantes son las de dirección de los web services. 
o	Directives.js: Aquí se guardan las directivas que se usan en el proyecto. 
o	Routes.factory.js: Aquí se declaran todas las rutas del proyecto. Inyectando a cada ruta su correspondiente vista y controlador.
o	Services.js: Esta es la interfaz para declarar los webservices.
-	Images: Aquí se almacan algunas imágenes utilziadas en el proyecto.
-	Less: Aquí se declaran todos los estilos del proyecto.
-	Tiles: Aquí se almacena el código de las vistas llamadas tiles. Que son pequeños componentes de vistas mas grandes.
-	util: En útil se almacenan todos los factories utilziados en el proyecto.
-	Views: Aquí van acomodados en carpteas cada vista con su respectivo controlador y en casos específicos css.
-	App.js: Codigo de angular para funciones que se ejecuten en tiempo en cualquier cambio de estado, y al arranque.
-	Index.html: Aquí se declaran elementos del dom, que van tras carga inicial.

Bower.json
Es un archivo en el cual se declaran todas las dependencias de bower del proyecto. Siempre que se instale algún componente se tiene que instalar con la instrucción bower install --save “nombreComponente” notese la doble – Esto le indica a bower que tiene que guardar la definición en este archivo.

Index.html
Aquí es en donde se declaran explícitamente las dependencias de bower, como de css, asi como cualquier otra referencia de js. De la misma forma se declaran los elementos con los que arranca el DOM.

Package.json
Aquí se definen todas las dependencias de Node.js (npm). De la misma forma que con Bower, se tiene que usar --save para que guarde la dependencia en este archivo.
