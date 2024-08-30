function obtenerHistorial() {
  const historialJSON = localStorage.getItem("historialGenerado");
  return historialJSON ? JSON.parse(historialJSON) : [];
}

function mostrarHistorial(historial) {//se esta enviando como parametro un id del dom
  const historialContainer = document.getElementById("historial");
  historialContainer.innerHTML = '';

  historialContainer.innerHTML = historial.reduce((html, item) => {//de donde salio el html y el item?
    html += `<div class="his" id="tarjeta">${item.texto} - Estado: ${item.estado}</div>`;// ni siquiera se como funciona el $
    return html;
  }, '');
}

function filtrarHistorial(textoBusqueda) {//??
  const historial = obtenerHistorial();
  const historialFiltrado = historial.reduce((resultado, item) => {//aun no entiendo de donde salio el resultafo, item??
    if (item.texto.toLowerCase().includes(textoBusqueda.toLowerCase())) {
      resultado.push(item);
    }
    return resultado;
  }, []);
  mostrarHistorial(historialFiltrado);
}
