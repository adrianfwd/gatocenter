import { getSolicitud } from "../servicios/get";
import { eliminarSolicitud } from "../servicios/delete";


visualizacionSoli()

const div_soli = document.getElementById("solicitudes");

//var solicitudes = await getSolicitud()

//solicitudes.forEach(user => {

//    const soli = document.createElement('p'); // Crear un elemento li para cada usuario
//    p.innerText = user.nombre; // Asignar el nombre del usuario al contenido del li
//    div_soli.appendChild(soli); // Añadir el elemento li al elemento ul
//})

async function visualizacionSoli() {//funcion para vizualizar datos obtenidos de gettask en la pagina

  const data = await getSolicitud()//el await es para esperar que se ejecute la funcion anterior

  for (let i = 0; i < data.length; i++) {//por cada item creado se crea una p
    console.log(data[i])
    const ids = data[i].id

    let div_padre = document.createElement("div")


    let p = document.createElement("p")
    p.innerHTML = "nombre : " + data[i].nombre + "<br> modelo :" + data[i].pc + "<br> Salida :" + data[i].salida + "<br> Regreso :" + data[i].regreso+ "<br> ID :" + data[i].id 
      div_padre.appendChild(p)

    let btn_aceptar = document.createElement("button")
    btn_aceptar.innerText = "ACEPTAR"
    div_padre.appendChild(btn_aceptar)

    btn_aceptar.addEventListener("click", function () {
      generarHistorialAceptado(div_padre)
      div_soli.removeChild(div_padre);


    });

    let btn_denegar = document.createElement("button")
    btn_denegar.innerText = "DENEGAR"
    div_padre.appendChild(btn_denegar)
    btn_denegar.addEventListener("click", function () {
      div_soli.removeChild(div_padre);
      generarHistorialDenegada(div_padre)
      eliminarSolicitud(ids)
    });

    div_soli.appendChild(div_padre);
  }
}

let historialGenerado = [];




function generarHistorialAceptado(divPadre) {
  const nombreHistorial = divPadre.querySelector("p").innerText;

  let historialItem = {
    texto: nombreHistorial,
    estado: "solicitud aceptada"
  };

  historialGenerado.push(historialItem);

  localStorage.setItem("historialGenerado", JSON.stringify(historialGenerado));
}


function generarHistorialDenegada(divPadre) {
  const nombreHistorial = divPadre.querySelector("p").innerText;

  let historialItem = {
    texto: nombreHistorial,
    estado: "solicitud denegada"
  };

  historialGenerado.push(historialItem);
  localStorage.setItem("historialGenerado", JSON.stringify(historialGenerado));


}
