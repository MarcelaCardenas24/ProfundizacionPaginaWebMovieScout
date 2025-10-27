MovieScout – Página web de películas

Actividad de Profundización
Lesly Marcela Cárdenas Ávila
leslymcardenas@ucompensar.edu.co
Ingeniería de Software
Fundación Universitaria Compensar
Desarrollo De Software Web Front-end
Julian David Gomez Perez
Octubre 27, 2025


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

Implementación de Sass y modularización del CSS

En esta nueva implementación de la pagina web MovieScout se implementó el
preprocesador **Sass (Syntactically Awesome Style Sheets)** con el propósito
de optimizar, modularizar y mantener de forma más ordenada los estilos del 
sitio web, cumpliendo con la actividad individual de profundizacion.  

Para ello, se creó una carpeta denominada sass que contiene seis archivos .scss, 
los cuales representan módulos derivados y reorganizados del antiguo archivo 
styles.css:

- _variables.scss: Define las variables reutilizables del proyecto, tales como 
colores principales, secundarios, tipografías y tamaños de texto.Estas variables
permiten mantener coherencia en el diseño y facilitar futuros cambios globales. 

- _base.scss: Contiene los estilos generales de la página, como los márgenes, 
el color de fondo, el tipo de fuente y las configuraciones iniciales aplicadas 
al cuerpo del documento (`body`).  

- _cards.scss: Agrupa los estilos específicos de las tarjetas de películas, 
incluyendo la estructura, los efectos al pasar el cursor (*hover*), la altura
uniforme de las imágenes y la disposición del contenido interno de cada card. 

- _comentarios.scss: Reúne los estilos aplicados a la sección de comentarios.
Se mejoró la apariencia del formulario, utilizando tonos oscuros en los campos 
de texto y personalizando los *placeholders* para que se adapten al diseño 
general del sitio.  

- _responsive.scss: Incluye las reglas *media queries* que aseguran la correcta
visualización del sitio en dispositivos móviles, tabletas y pantallas de 
escritorio, manteniendo una apariencia adaptable (*responsive*).  

- styles.scss: Archivo principal que importa todos los módulos anteriores
y genera el archivo final `styles.css` utilizado por la página web.

Finalmente, todos los módulos se importan dentro del archivo principal 
**`styles.scss`**, el cual es compilado automáticamente por el
*Live Sass Compiler* en Visual Studio Code para generar el archivo final 
**`styles.css`**, utilizado por la página web.

Características técnicas implementadas

- Variables: permiten definir valores reutilizables (como colores o tamaños)
 para mantener consistencia visual. 

  Ejemplo:  
  
  scss
  $color-principal: #0d0000;
  $color-secundario: #ff4b4b;
  

- Anidación: se utilizó para agrupar reglas relacionadas, reduciendo la repetición 
y mejorando la legibilidad del código.  
  Ejemplo:  
  scss

  header {
    background-color: $color-principal;
    color: white;
    padding: 10px;

    h1 {
      font-size: 1.5rem;
    }

    small {
      font-size: 0.9rem;
      opacity: 0.8;
    }
  }

  .card {
    background-color: white;

    h5 {
      font-weight: bold;
      color: $color-principal;
    }

    p {
      color: #555;
      font-size: 0.9rem;
    }
  }

  .comentarios {
    background-color: $color-fondo;
    color: $color-texto;
    padding: 20px;

    h3 {
      color: $color-texto;
      margin-bottom: 10px;
    }

    input,
    textarea {
      background-color: #848383; // gris oscuro
      color: $color-texto;
      border: 1px solid lighten($color-fondo, 15%);
      border-radius: $borde-radio;
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;

      &::placeholder {
        color: lighten($color-texto, 35%);
      }

      &:focus {
        border-color: $color-principal;
        outline: none;
      }
    }

    button {
      background-color: $color-principal;
      color: $color-fondo;
      border: none;
      border-radius: $borde-radio;
      padding: 8px 12px;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background-color: #531E0E;
      }
    }
  }

  

- Interpolación: se aplicó para generar clases dinámicas de forma automática, simplificando la creación de estilos repetitivos.  
  Ejemplo 1 (clases `.caja-#{$i}`):  
  scss
  @for $i from 1 through 3 {
    .caja-#{$i} {
      background-color: lighten($color-principal, 20%);
    }
  }
  
  Ejemplo 2 (clases `.texto-#{$i}`):  
  scss
  @for $i from 1 through 3 {
    .texto-#{$i} {
      font-size: #{$i * 5}px;
    }
  }


Con esta implementación, el proyecto MovieScout logra una estructura más 
escalable, profesional y fácil de mantener, aplicando buenas prácticas de
desarrollo front-end mediante el uso de Sass y la organización modular 
del código CSS.
