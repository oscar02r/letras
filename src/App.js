import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';

function App() {

  const [busquedaLetra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState('');
  const [info, guardarInfo] = useState({});

  const {cancion, artista} = busquedaLetra;

  useEffect(() => {

    if( Object.keys(busquedaLetra).length ===0 ) return;
     const consultarApiLetras = async ()=>{
           const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
           const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
           const [ letra, informacion ] = await Promise.all([axios(url), axios(url2)]);
           guardarLetra( letra.data.lyrics); 
           guardarInfo(informacion.data.artists[0]);

     }
     consultarApiLetras(); 
    
  }, [busquedaLetra])
  return (
    <>
      <Formulario
         guardarBusquedaLetra= {guardarBusquedaLetra}
      />
       <div className="cotainer mt-5">
         <div className="row">
           <div className="col-md-6">
             1
           </div>
           <div className="col-md-6">
             <Cancion
               letra={letra}
             />
           </div>
         </div>
       </div>
    </>
  );
}

export default App;
