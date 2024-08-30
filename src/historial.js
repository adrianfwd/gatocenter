function obtenerHistorial() {
  const historialJSON = localStorage.getItem("historialGenerado");
  return historialJSON ? JSON.parse(historialJSON) : [];
}

function mostrarHistorial(historial) {
  const historialContainer = document.getElementById("historial");
  historialContainer.innerHTML = '';

  historialContainer.innerHTML = historial.reduce((html, item) => {
    html += `<div class="his" id="tarjeta">${item.texto} - Estado: ${item.estado}</div>`;
    return html;
  }, '');
}

function filtrarHistorial(textoBusqueda) {
  const historial = obtenerHistorial();
  const historialFiltrado = historial.reduce((resultado, item) => {
    if (item.texto.toLowerCase().includes(textoBusqueda.toLowerCase())) {
      resultado.push(item);
    }
    return resultado;
  }, []);
  mostrarHistorial(historialFiltrado);
}
