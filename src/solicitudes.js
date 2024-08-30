import { addSolicitud } from "/servicios/post.js";


const nombre = document.getElementById("nombre");
const pc = document.getElementById("pc");
const fecha_salida = document.getElementById("fecha_salida");
const fecha_regreso = document.getElementById("fecha_regreso");

const btn = document.getElementById("btn");

const dialog1 = document.getElementById("primero");
const closeButton1 = document.getElementById("boton_1");
const dialog2 = document.getElementById("segundo");
const closeButton2 = document.getElementById("boton_2");

closeButton1.addEventListener("click", () => {
     dialog1.close();
 });
 closeButton2.addEventListener("click", () => {
     dialog2.close();

 });

btn.addEventListener("click", function () {

     if (nombre.value != "" && pc.value != ""&& fecha_salida.value != "" && fecha_regreso.value != "") {

          addSolicitud(nombre.value, pc.value, fecha_salida.value, fecha_regreso.value);
          dialog1.showModal();     
     }else{
          dialog2.showModal();
     }
})