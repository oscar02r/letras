import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';

function App() {

  const [busquedaLetra, guardarBusquedaLetra] = useState([]);
  
  useEffect(() => {

    if( Object.keys(busquedaLetra).length ===0 ) return;
     const consultarApiLetras = async ()=>{
         
     }
     consultarApiLetras(); 
    
  }, [busquedaLetra])
  return (
    <>
      <Formulario
         guardarBusquedaLetra= {guardarBusquedaLetra}
      />
    </>
  );
}

export default App;
