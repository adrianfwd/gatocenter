import { getUsuarios, getAdmins } from "../servicios/get";

const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const codigo = document.getElementById("codigo");
const btn = document.getElementById("btn");

btn.addEventListener("click", async function () {
  if (codigo.value !== "" && correo.value !== "" && contrasena.value !== "") {
    if (codigo.value == 0) {
      try {
        const admi = await getAdmins();
        let encontrado = admi.find((encontro) => encontro.correo === correo.value);
        if (encontrado) {
          if (encontrado.contrasena === contrasena.value) {
            alert("Iniciando sesión");
            window.location = "src/adm.html";
          } else {
            alert("Contraseña, correo o código incorrecto");
          }
        } else {
          alert("Usuario no registrado");
        }
      } catch (error) {
        console.error("Error al obtener administradores:", error);
        alert("Error al obtener administradores. Revisa la consola para más detalles.");
      }
    } else if (codigo.value == 1) {
      try {
        const usuarios = await getUsuarios();
        let encontrado = usuarios.find((encontrado) => encontrado.correo === correo.value);
        if (encontrado) {
          if (encontrado.contrasena === contrasena.value) {
            alert("Iniciando sesión como un usuario");
            window.location = "src/solicitud.html";
          } else {
            alert("Contraseña, correo o código incorrecto");
          }
        } else {
          alert("Usuario no registrado");
        }
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
        alert("Error al obtener usuarios. Revisa la consola para más detalles.");
      }
    } else {
      alert("Código incorrecto");
    }
  } else {
    alert("Complete los espacios en blanco");
  }
});
