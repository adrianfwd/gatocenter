export const addAdmi = async(nombre_admi, apellidos_admi, correo_admi, contrasena_admi) => {//es necesario el tarea entre (), le falta el let o const 
 
    try { //porque try
     const response = await fetch("http://localhost:3001/admins", {//llama al api

       method: 'POST',//post empuja/guarda/inserta el contenido
       headers: {//muestra el tipo de contenido que se guarda
       'Content-Type': 'application/json'
      },//esta vol el localhost en un jason para poder ser leidos
      body: JSON.stringify({// convesion de todo a un string  //body se refiere a todo el contenido

        nombre_admi: nombre_admi,
        apellidos_admi: apellidos_admi,
        correo_admi:correo_admi,
        contrasena_admi: contrasena_admi,
      })
   });
   

    const data = await response.json(); //esperando a que se realice la funcion de conversion anterior          

    console.log(data)
    } catch(error) {
               
     console.log(error)
    } 
}