import { getUsuarios, getAdmins } from "../servicios/get";

const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const codigo = document.getElementById("codigo");
const btn = document.getElementById("btn");


btn.addEventListener("click", async function () {

if (codigo.value != "" && correo.value != ""&& contrasena.value != "") {
    if (codigo.value == 0) {

     var admi = await getAdmins()
     let encontrado = admi.find((encontro) => encontro.correo === correo.value); 
     if (encontrado) {
        if (encontrado.contrasena === contrasena.value) {
         alert("iniciando seccion")
         window.location="index.html"
        } else{
          alert("contraseña, gmail o codigo incorrecto")
        }
      }else{
       alert("usuario no registrado")
      }
    }else if (codigo.value == 1) {
        
     const usuarios = getUsuarios()
     let encontrado = usuarios.find((encontrado) => encontrado.Correo === Gmail_input); 
        if (encontrado) {
            if (encontrado.Contrasena == Password_input) {
              alert("iniciando seccion")
                window.location="index.html"
            } else{
              alert("contraseña, gmail o codigo incorrecto")
            }
          }else{
           alert("usuario no registrado")
          }
    } else {
        alert("codigo incorrecto")
    }
}else{
    alert ("complete los espacios en blanco")
}
})