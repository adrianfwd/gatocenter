import { addAdmi } from "/servicios/post.js";
import { addUser } from "/servicios/post.js";

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const codigo = document.getElementById("codigo");
const btn = document.getElementById("btn");



btn.addEventListener("click", function () {
if (codigo.value != "") {

    if (codigo.value == 0) {

     alert("registrado como administrador")
     addAdmi(nombre.value, correo.value, contrasena.value) 

    }else if (codigo.value == 1) {
        
         alert("registrado como usurio")
         addUser(nombre.value, correo.value, contrasena.value)
         window.location.href="http://localhost:1234/login.html" 

    } else {
        alert("no puede registrarse")
    }
    
}else{
    alert ("complete los espacios en blanco")
}
})