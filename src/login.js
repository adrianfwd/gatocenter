import { getUsuarios, getAdmins } from "../servicios/get";

const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const codigo = document.getElementById("codigo");
const btn = document.getElementById("btn");

const dialog1 = document.getElementById("primero");
const closeButton1 = document.getElementById("boton_1");
const dialog2 = document.getElementById("segundo");
const closeButton2 = document.getElementById("boton_2");
const dialog3 = document.getElementById("tercero");
const closeButton3 = document.getElementById("boton_3");
const dialog4 = document.getElementById("cuarto");
const closeButton4 = document.getElementById("boton_4");

const dialog5 = document.getElementById("quinto");
const closeButton5 = document.getElementById("boton_5");
const dialog6 = document.getElementById("sexto");
const closeButton6 = document.getElementById("boton_6");
const dialog7 = document.getElementById("septimo");
const closeButton7 = document.getElementById("boton_7");
const dialog8 = document.getElementById("optavo");
const closeButton8 = document.getElementById("boton_8");
const dialog9 = document.getElementById("noveno");
const closeButton9 = document.getElementById("boton_9");
const dialog10 = document.getElementById("decimo");
const closeButton10 = document.getElementById("boton_10");


closeButton1.addEventListener("click", () => {
  dialog1.close();
  window.location.href= "http://localhost:1234/adm.html";
});
closeButton2.addEventListener("click", () => {
  dialog2.close();
});
closeButton3.addEventListener("click", () => {
  dialog3.close();
});
closeButton4.addEventListener("click", () => {
  dialog4.close();
});

closeButton5.addEventListener("click", () => {
  dialog5.close();
  window.location.href = "http://localhost:1234/solicitudes.html";
});
closeButton6.addEventListener("click", () => {
  dialog6.close();
});
closeButton7.addEventListener("click", () => {
  dialog7.close();
});
closeButton8.addEventListener("click", () => {
  dialog8.close();
});
closeButton9.addEventListener("click", () => {
  dialog9.close();
});
closeButton10.addEventListener("click", () => {
  dialog10.close();
});



btn.addEventListener("click", async function () {
  if (codigo.value !== "" && correo.value !== "" && contrasena.value !== "") {
    if (codigo.value == 0) {
      try {
        const admi = await getAdmins();
        let encontrado = admi.find((encontro) => encontro.correo === correo.value);
        if (encontrado) {
          if (encontrado.contrasena === contrasena.value) {
            dialog1.showModal();
          } else {
            dialog2.showModal();
          }
        } else {
          dialog3.showModal();
        }
      } catch (error) {
        console.error("Error al obtener administradores:", error);
        dialog4.showModal();
      }
    } else if (codigo.value == 1) {
      try {
        const usuarios = await getUsuarios();
        let encontrado = usuarios.find((encontrado) => encontrado.correo === correo.value);
        if (encontrado) {
          if (encontrado.contrasena === contrasena.value) {
            dialog5.showModal();
          } else {
            dialog6.showModal();
          }
        } else {
          dialog7.showModal();
        }
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
        dialog8.showModal();
      }
    } else {
      dialog9.showModal();
    }
  } else {
    dialog10.showModal();
  }
});
