// Filtrar películas por texto, año o género
const buscador = document.getElementById("buscador");
const filtroAnio = document.getElementById("filtro-anio");
const filtroGenero = document.getElementById("filtro-genero");
const lista = document.getElementById("lista-peliculas");

function aplicarFiltros() {
  const texto = buscador.value.toLowerCase();
  const anio = filtroAnio.value;
  const genero = filtroGenero.value;

  const tarjetas = lista.querySelectorAll(".col-md-4");

  tarjetas.forEach(card => {
    const titulo = card.querySelector(".pelicula-titulo").textContent.toLowerCase();
    const sinopsis = card.querySelector("p:nth-of-type(2)").textContent.toLowerCase();
    const cardAnio = card.dataset.anio;
    const cardGenero = card.dataset.genero;

    const coincideTexto = titulo.includes(texto) || sinopsis.includes(texto);
    const coincideAnio = !anio || cardAnio === anio;
    const coincideGenero = !genero || cardGenero === genero;

    card.style.display = (coincideTexto && coincideAnio && coincideGenero) ? "" : "none";
  });
}

buscador.addEventListener("input", aplicarFiltros);
filtroAnio.addEventListener("change", aplicarFiltros);
filtroGenero.addEventListener("change", aplicarFiltros);
