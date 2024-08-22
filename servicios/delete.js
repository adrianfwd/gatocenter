export const eliminarSolicitud = async(id) => {//es necesario el tarea entre (), le falta el let o const 
 
    try { 
     const response = await fetch("http://localhost:3001/PCsolicitud" + id, {//llama al api
  
       method: 'DELETE',
       headers: {
       'Content-Type': 'application/json'
      },
   });
   
  
    const data = await response.json(); //esperando a que se realice la funcion de conversion anterior          
  
    console.log(data)
    } catch(error) {
               
     alert("fallo el metodo delete no funciono")
    } 
  }