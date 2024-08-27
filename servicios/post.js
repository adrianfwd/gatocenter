export const addAdmi = async(nombre, correo, contrasena) => {//es necesario el tarea entre (), le falta el let o const 
 
    try { //porque try
     const response = await fetch("http://localhost:3001/admins", {//llama al api

       method: 'POST',//post empuja/guarda/inserta el contenido
       headers: {//muestra el tipo de contenido que se guarda
       'Content-Type': 'application/json'
      },//esta vol el localhost en un jason para poder ser leidos
      body: JSON.stringify({// convesion de todo a un string  //body se refiere a todo el contenido

        nombre: nombre,
        correo:correo,
        contrasena: contrasena,
      })
   });
   

    const data = await response.json(); //esperando a que se realice la funcion de conversion anterior          

    console.log(data)
    } catch(error) {
               
     console.log(error)
    } 
}
//------------------------------------------------------------------------------------------------------
export const addUser = async(nombre, correo, contrasena) => {//es necesario el tarea entre (), le falta el let o const 
 
    try { //porque try
     const response = await fetch("http://localhost:3001/users", {//llama al api

       method: 'POST',//post empuja/guarda/inserta el contenido
       headers: {//muestra el tipo de contenido que se guarda
       'Content-Type': 'application/json'
      },//esta vol el localhost en un jason para poder ser leidos
      body: JSON.stringify({// convesion de todo a un string  //body se refiere a todo el contenido

        nombre: nombre,
        correo:correo,
        contrasena: contrasena,
      })
   });
   

    const data = await response.json(); //esperando a que se realice la funcion de conversion anterior          

    console.log(data)
    } catch(error) {
               
     console.log(error)
    } 
}

//-----------------------------------------------------------
export const addSolicitud = async(nombre, pc, fecha_salida, fecha_regreso) => {//es necesario el tarea entre (), le falta el let o const 
 
  try { //porque try
   const response = await fetch("http://localhost:3001/PCsolicitud", {//llama al api

     method: 'POST',//post empuja/guarda/inserta el contenido
     headers: {//muestra el tipo de contenido que se guarda
     'Content-Type': 'application/json'
    },//esta vol el localhost en un jason para poder ser leidos
    body: JSON.stringify({// convesion de todo a un string  //body se refiere a todo el contenido

      nombre: nombre,
      pc: pc,
      salida: fecha_salida,
      regreso: fecha_regreso,
    })
 });
 

  const data = await response.json(); //esperando a que se realice la funcion de conversion anterior          

  console.log(data)
  } catch(error) {
             
   console.log(error)
  } 
}