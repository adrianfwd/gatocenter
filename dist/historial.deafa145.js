function obtenerHistorial() {
    const historialJSON = localStorage.getItem("historialGenerado");
    return historialJSON ? JSON.parse(historialJSON) : [];
}
function mostrarHistorial(historial) {
    const historialContainer = document.getElementById("historial");
    historialContainer.innerHTML = "";
    historial.forEach((item)=>{
        const divItem = document.createElement("div");
        divItem.classList.add("his");
        divItem.setAttribute("id", "tarjeta");
        divItem.innerText = `${item.texto} - Estado: ${item.estado}`;
        historialContainer.appendChild(divItem);
    });
}
function filtrarHistorial(nombre) {
    const historial = obtenerHistorial();
    const historialFiltrado = historial.filter((item)=>item.texto.toLowerCase().includes(nombre.toLowerCase()));
    mostrarHistorial(historialFiltrado);
}
document.getElementById("buscador").addEventListener("input", (event)=>{
    const nombreBuscado = event.target.value;
    filtrarHistorial(nombreBuscado);
});
document.addEventListener("DOMContentLoaded", ()=>{
    mostrarHistorial(obtenerHistorial());
});

//# sourceMappingURL=historial.deafa145.js.map
