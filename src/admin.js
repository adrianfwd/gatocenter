import { addAdmi } from "/servicios/post.js";

const nombre_admi = document.getElementById("nombre_admi");
const apellidos_admi = document.getElementById("apellidos_admi");
const correo_admi = document.getElementById("correo_admi");
const contrasena_admi = document.getElementById("contrasena_admi");

const btn_admi = document.getElementById("btn_admi");


btn_admi.addEventListener("click", function () {

    addAdmi(nombre_admi.value, apellidos_admi.value, correo_admi.value, contrasena_admi.value)

})