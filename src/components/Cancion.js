import React from 'react'

const Cancion = ({letra}) => {
    
    if(letra === null) return null;
    return ( 
        <>
          <h2>Letra Canción</h2>
          <p className="letra">{letra}</p>
        </>
     );
}
 
export default Cancion;