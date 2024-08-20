import { getUsuarios, getAdmins } from "../servicios/get";

const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const codigo = document.getElementById("codigo");
const btn = document.getElementById("btn");


btn.addEventListener("click", async function () {


if (codigo.value != "" && correo.value != ""&& contrasena.value != "") {

    if (codigo.value == 0) {


     const usuarios = await getUsuarios()
     let encontrado = usuarios.find((encontrado) => encontrado.correo === correo.value); 

     if (encontrado) {

        if (encontrado.contrasena == contrasena.value) {

         alert("jgjhj")

         window.location="index.html"

        } else{
          alert("contraseña o gmail incorrecto")
        }

      }else{
       alert("usuario no registrado")
      }

    }else if (codigo.value == 1) {
        
     const usuarios = getAdmins()
     let encontrado = usuarios.find((encontrado) => encontrado.Correo === Gmail_input); 

        if (encontrado) {

            if (encontrado.Contrasena == Password_input) {
    

              alert("iniciando seccion")
                window.location="index.html"

            } else{
              alert("contraseña o gmail incorrcto")
            }
    
          }else{
           alert("usuario no registrado")
          }

    } else {
        alert("no puede registrarse")
    }
    
}else{
    alert ("complete los espacios en blanco")
}
})