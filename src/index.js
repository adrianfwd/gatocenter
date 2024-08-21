import { addSolicitud } from "/servicios/post.js";


const nombre = document.getElementById("nombre");
const pc = document.getElementById("pc");
const fecha_salida = document.getElementById("fecha_salida");
const fecha_regreso = document.getElementById("fecha_regreso");

const btn = document.getElementById("btn");


btn.addEventListener("click", function () {

     if (nombre.value != "" && pc.value != ""&& fecha_salida.value != "" && fecha_regreso.value != "") {

          addSolicitud(nombre.value, pc.value, fecha_salida.value, fecha_regreso.value) 
          alert("solicitud enviada")       
     }else{
          alert("complete los espacios vacios")
     }
})