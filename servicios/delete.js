 export const eliminarSolicitud = async(id) => {//es necesario el tarea entre (), le falta el let o const 
    try { 
     const response = await fetch ("http://localhost:3001/PCsolicitud/"+id ,{//llama al api
       method: 'DELETE',
       headers: {'Content-Type': 'application/json'}
    });
    let dato= await response.json()
    console.log("Este es el dato",dato);
   if (!response.ok) {
    throw new Error("No se ejecuto");
   }    
   return console.log("Se elimino el usuario"); 
    } catch(error) {     
     console.log("fallo el metodo delete no funciono");
     throw error;
    } 
  }

