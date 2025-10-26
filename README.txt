MovieScout – Página web de películas

Actividad de Contextualización
Lesly Marcela Cárdenas Ávila
leslymcardenas@ucompensar.edu.co
Ingeniería de Software
Fundación Universitaria Compensar
Desarrollo De Software Web Front-end
Julian David Gomez Perez
Octubre 14, 2025


Descripción general

Se realiza la actividad academica en donde se diseña la pagina web 
MovieScout para mostrar un catálogo de películas con información 
pormenorizada, perfiles individuales y un sistema de comentarios 
guardado en el navegador por mediode localStorage.Para conseguir una
apariencia moderna, adaptable y estéticamente agradable, fue creada 
con JavaScript, HTML5, CSS3 y empleando Bootstrap 5.

index.html

Esta es la página principal del sitio.En el diseño responsivo de 
Bootstrap 5 se puede ver que las películas están dispuestas en 
tarjetas.Incluye un encabezado con el nombre del proyecto y un banner
principal que presenta una película de forma destacada, con su 
sinopsis e imagen.Contiene un buscador y dos menús desplegables que
permiten filtrar las películas por tipo y año.

Cada tarjeta de película incluye una imagen, el título, el año, 
el género y un resumen breve; también tiene un botón que enlaza 
a la página con más detalles.   Para estructurar los componentes,
el diseño emplea elementos de Bootstrap como las filas, las columnas,
los contenedores y las tarjetas, para organizar los componentes de una
 forma que se puede adaptar a diversos aparatos.

informacion.html

Esta página presenta la información total de cada una de las películas.
Emplea el parámetro ?id en la URL para reconocer y presentar la ficha 
pertinente, sin tener que hacer múltiples cargas o navegar por varias 
páginas.Cada ficha contiene el año, la sinopsis, el género, la reseña
y el título. También incluye un apartado con los nombres e imágenes 
de los actores principales.

Asimismo, incluye un sistema de comentarios dinámicos desarrollado en
JavaScript.  El usuario puede escribir y guardar sus comentarios, los
cuales se almacenan en el localStorage del navegador para que 
permanezcan disponibles en futuras visitas.  Bootstrap se usa para 
estructurar las secciones con filas y columnas, así como para aplicar
estilos a los botones, formularios y tarjetas de actores.

styles.css

Este archivo establece los estilos personalizados de la página, que 
añaden a la apariencia fundamental de Bootstrap.  Se modifican los 
colores, el tamaño de la fuente, los márgenes y cómo las imágenes son
visualizadas dentro de las tarjetas.  Asimismo, adapta el contenido 
y las imágenes a la anchura de la pantalla usando media queries, lo 
que permite aplicar reglas responsive.  Asimismo, se da un estilo a 
la sección de comentarios para que los mensajes se muestren en 
recuadros claros y fáciles de leer.

funciones.js

La funcionalidad de búsqueda y los filtros en la página principal 
están bajo el control del archivo JavaScript primordial.La función 
aplicarFiltros() evalúa el texto ingresado, el año y el género 
elegidos para exhibir u ocultar las películas que cumplen con 
estos requisitos.  El script, sin tener que recargar la página,
modifica el DOM en tiempo real, lo que le proporciona al usuario
una experiencia interactiva y fluida.

Uso de Bootstrap 5

La estructura del proyecto y el diseño visual se fundamentan en 
Bootstrap 5.  Se emplea para los encabezados, las tarjetas, los 
botones, los formularios de búsqueda y filtrado, las imágenes y 
los sistemas de cuadrícula (grid).  Se utilizan también los íconos 
de Bootstrap Icons para agregar elementos visuales al encabezado y 
a otras partes.  Su integración posibilita que la web sea totalmente 
responsiva y que el estilo permanezca coherente en dispositivos 
móviles, tabletas y ordenadores.