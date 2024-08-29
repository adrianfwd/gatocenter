import { getSolicitud } from "../servicios/get";
import { eliminarSolicitud } from "../servicios/delete";

// Referencias a elementos del DOM
const div_soli = document.getElementById("solicitudes");
const searchInput = document.getElementById("search");

// Función para cargar y mostrar las solicitudes
async function visualizacionSoli() {
  try {
    // Obtén todas las solicitudes
    const data = await getSolicitud();

    // Inicialmente, mostramos todas las solicitudes
    mostrarSolicitudes(data);//se llam  la funcon 

    // Filtramos las solicitudes en función del texto de búsqueda
    searchInput.addEventListener("input", () => {//????
      const searchText = searchInput.value.toLowerCase();
      const solicitudesFiltradas = data.filter(solicitud =>
        solicitud.nombre.toLowerCase().includes(searchText)
      );
      mostrarSolicitudes(solicitudesFiltradas);//??
    });

  } catch (error) {
    console.error('Error al obtener las solicitudes:', error);
  }
}

// Función para mostrar solicitudes en el DOM
function mostrarSolicitudes(solicitudes) {//de donde salio solicitudes? se lo llamo del id del html
  // Limpiar el contenedor antes de añadir nuevas solicitudes
  div_soli.innerHTML = '';

  // Usa map para transformar las solicitudes en elementos DOM
  solicitudes.map((solicitud) => {//?? llama solicitudes del dom, .map transform el div solicitudes en un vector, solicitud guarda los div creados en el vector solicitudes
    let div_padre = document.createElement("div");

    let p = document.createElement("p");//solicitud trae de data el nombre, pc, salida.
    p.innerHTML = `nombre : ${solicitud.nombre}<br> modelo : ${solicitud.pc}<br> Salida : ${solicitud.salida}<br> Regreso : ${solicitud.regreso}<br> ID : ${solicitud.id}`;
    div_padre.appendChild(p);

    let btn_aceptar = document.createElement("button");
    btn_aceptar.innerText = "ACEPTAR";
    div_padre.appendChild(btn_aceptar);

    btn_aceptar.addEventListener("click", function () {
      div_soli.removeChild(div_padre);
      generarHistorialAceptado(div_padre);// en realidad el div padre, es un div hijo del div soli
      eliminarSolicitud(solicitud.id);
    });

    let btn_denegar = document.createElement("button");
    btn_denegar.innerText = "DENEGAR";
    div_padre.appendChild(btn_denegar);
    btn_denegar.addEventListener("click", function () {
      div_soli.removeChild(div_padre);
      generarHistorialDenegada(div_padre);
      eliminarSolicitud(solicitud.id);
    });

    div_soli.appendChild(div_padre);
  });
}

// Funciones para generar el historial
function generarHistorialAceptado(divPadre) {//div padre es una variable local temporal, 

  const nombreHistorial = divPadre.querySelector("p").innerText;

  let historialGenerado = JSON.parse(localStorage.getItem("historialGenerado")) || [];//??

  let historialItem = {
    texto: nombreHistorial,
    estado: "solicitud aceptada"
  };

  historialGenerado.push(historialItem);

  localStorage.setItem("historialGenerado", JSON.stringify(historialGenerado));
}

function generarHistorialDenegada(divPadre) {
  const nombreHistorial = divPadre.querySelector("p").innerText;

  let historialGenerado = JSON.parse(localStorage.getItem("historialGenerado")) || [];

  let historialItem = {
    texto: nombreHistorial,
    estado: "solicitud denegada"
  };

  historialGenerado.push(historialItem);
  
  localStorage.setItem("historialGenerado", JSON.stringify(historialGenerado));
}

// Inicializa la visualización de solicitudes
visualizacionSoli();
