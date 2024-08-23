// Recuperar el historial del localStorage
function obtenerHistorial() {
  const historialJSON = localStorage.getItem("historialGenerado");
  return historialJSON ? JSON.parse(historialJSON) : [];
}

// Mostrar el historial en el div
function mostrarHistorial(historial) {
  const historialContainer = document.getElementById("historial");
  historialContainer.innerHTML = ''; // Limpiar el contenedor antes de mostrar

  historial.forEach(item => {
    const divItem = document.createElement("div");
    divItem.classList.add("historial-item");
    divItem.innerText = `${item.texto} - Estado: ${item.estado}`;
    historialContainer.appendChild(divItem);
  });
}

// Filtrar el historial por nombre
function filtrarHistorial(nombre) {
  const historial = obtenerHistorial();
  const historialFiltrado = historial.filter(item => item.texto.toLowerCase().includes(nombre.toLowerCase()));
  mostrarHistorial(historialFiltrado);
}

// Evento para el buscador
document.getElementById("buscador").addEventListener("input", (event) => {
  const nombreBuscado = event.target.value;
  filtrarHistorial(nombreBuscado);
});

// Inicializar el historial al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  mostrarHistorial(obtenerHistorial());
});