import React from 'react'
import { Link } from 'react-router-dom'
import espacioCajas from "../../assets/img/espacioCajas.avif"

function Alineacion() {
  return (
    <div className='container text-center'>
        
       
        
        <h3>Alineacion dentro de los contenedores</h3>

        <img
                          src={espacioCajas}
                          alt="CAJA"
                          className="hombre img-fluid rounded me-3 shadow p-3 mb-5 bg-body-tertiary rounded"
                          style={{ maxWidth: "200px" }} // Ajusta el tamaño de la imagen
                        />
        <div className='container text-start d-flex justify-content-center'>
        <ul>
            <li><Link to="/horizontalAlingnment">Alineacion Horizontal</Link></li>
            <li><Link to="/verticalAlignment">Alineacion Vertical</Link></li>
            <li><Link to="/individualAlignment ">Alineacion individual</Link></li>
            <li><Link to="/spacing ">Espacios</Link></li>
            <li><Link to="/flexibility ">Flexibilidad</Link></li>
            <li><Link to="/responsiv ">Responsiv</Link></li>
            <li><Link to="/ejemploCompleto ">Ejemplo</Link></li>
        </ul>
            

        </div>
       
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
  )
}

export default Alineacion