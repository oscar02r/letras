import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Info from './components/Info';

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

           if(letra.data.lyrics.length === 0 ){
              letra.data.lyrics =' Letra no disponible';
              guardarLetra( letra.data.lyrics);
              guardarInfo(informacion.data.artists[0]);
              return;
           }

           guardarLetra( letra.data.lyrics); 
           guardarInfo(informacion.data.artists[0]);

     }
     consultarApiLetras(); 
     // eslint-disable-next-line
  }, [busquedaLetra, info])
  return (
    <>
      <Formulario
         guardarBusquedaLetra= {guardarBusquedaLetra}
      />
       <div className="cotainer mt-5">
         <div className="row">
           <div className="col-md-6">
             <Info
               info= {info}
             />
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
