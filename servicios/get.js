export let getUsuarios = async () => { //todos los asyn necesitan un await, un try y catch
    try { 
      const response = await fetch( "http://localhost:3001/users"); // obtenido los datos los local host 
      const data = await response.json(); //esta volviendo el localhost en un jason para poder ser leidos
      return data
     
     } catch (error) { 
      console.log(error);//que tipo de error atrapa
     }
  }
//------------------------------------------------------------------------------------------------------------------

export let getAdmins = async () => { //todos los asyn necesitan un await, un try y catch
    try { 
      const response = await fetch( "http://localhost:3001/admins"); // obtenido los datos los local host 
      const data = await response.json(); //esta volviendo el localhost en un jason para poder ser leidos
      return data
     
     } catch (error) { 
      console.log(error);//que tipo de error atrapa
     }
  }