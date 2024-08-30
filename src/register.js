import { addAdmi } from "/servicios/post.js";
import { addUser } from "/servicios/post.js";

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const codigo = document.getElementById("codigo");
const btn = document.getElementById("btn");

const dialog1 = document.getElementById("primero");
const closeButton1 = document.getElementById("boton_1");
const dialog2 = document.getElementById("segundo");
const closeButton2 = document.getElementById("boton_2");
const dialog3 = document.getElementById("tercero")
const closeButton3 = document.getElementById("boton_3");
const dialog4 = document.getElementById("cuarto")
const closeButton4 = document.getElementById("boton_4");

closeButton1.addEventListener("click", () => {
    dialog1.close();
    window.location.href="http://localhost:1234/login.html" 

});
closeButton2.addEventListener("click", () => {
    dialog2.close();
    window.location.href="http://localhost:1234/login.html" 

});
closeButton3.addEventListener("click", () => {
    dialog3.close();
});
closeButton4.addEventListener("click", () => {
    dialog4.close();
});

btn.addEventListener("click", function () {
if (codigo.value != "") {

    if (codigo.value == 0) {
     addAdmi(nombre.value, correo.value, contrasena.value) 
     dialog2.showModal();

    }else if (codigo.value == 1) {
         addUser(nombre.value, correo.value, contrasena.value)     
         dialog1.showModal();

    } else {
        dialog3.showModal()
    }
    
}else{
    dialog4.showModal()
}
})