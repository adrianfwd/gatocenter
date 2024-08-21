import { getSolicitud } from "../servicios/get";


visualizacionSoli()

const div_soli = document.getElementById("solicitudes");

//var solicitudes = await getSolicitud()

//solicitudes.forEach(user => {

//    const soli = document.createElement('p'); // Crear un elemento li para cada usuario
//    p.innerText = user.nombre; // Asignar el nombre del usuario al contenido del li
//    div_soli.appendChild(soli); // Añadir el elemento li al elemento ul
//})

async function visualizacionSoli(){//funcion para vizualizar datos obtenidos de gettask en la pagina

    const data = await getSolicitud()//el await es para esperar que se ejecute la funcion anterior
  
    for (let i = 0; i < data.length; i++) {//por cada item creado se crea una p
      console.log(data[i])
        
       let p =document.createElement("p")
       p.innerHTML="nombre : "+ data[i].nombre + "<br> modelo :"+ data[i].pc + "<br> Salida :"+ data[i].salida+ "<br> Regreso :"+ data[i].regreso
       div_soli.appendChild(p)

       let btn_aceptar =document.createElement("button")
       btn_aceptar.innerText="ACEPTAR"
       div_soli.appendChild(btn_aceptar)

       let btn_denegar =document.createElement("button")
       btn_denegar.innerText="DENEGAR"
       div_soli.appendChild(btn_denegar)
    }}