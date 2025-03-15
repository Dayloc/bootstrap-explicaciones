import React from 'react'
import caja from "../../assets/img/caja.jpg";
import { Link } from 'react-router-dom';

function Dflex() {
  return (
    <div className='container text-center'>
        <h1 className='mt-4 text-info'>Flexbox("Cajas flexibles")</h1>
         <img
                  src={caja}
                  alt="CAJA"
                  className="hombre img-fluid rounded me-3 shadow p-3 mb-5 bg-body-tertiary rounded"
                  style={{ maxWidth: "200px" }} // Ajusta el tamaño de la imagen
                />
        <p className='m-2'> Bootstrap incluye una serie de clases de utilidad basadas en Flexbox que te permiten controlar la disposición, alineación y distribución de los elementos en tu página web.
        A continuación, te explico cómo trabajar con display flex en Bootstrap:</p>
<h4 className='mt-3'>1. Habilitar Flexbox en un contenedor</h4>
<div>
<h1>Código HTML </h1>


<div class="code-container  ">
      <pre>
        <code>
   <p className='ms-3 text-danger'>&lt;div class="d-flex container"&gt;</p>
 <p className='ms-5'>&lt;div&gt;Elemento 1&lt;/div&gt;</p> 
  <p className='ms-5'>&lt;div&gt;Elemento 2&lt;/div&gt;</p>
  <p className='ms-5'>&lt;div&gt;Elemento 3&lt;/div&gt;</p>
 <p className='text-danger'>&lt;/div&gt;</p>     
      </code>
      </pre>
</div>
  
</div>

<h5>Resultado:</h5>
<div className="d-flex m-5">
  <div className='bg-secondary'>Elemento 1</div>
  <div className='bg-primary-subtle'>Elemento 2</div>
  <div className='bg-primary'>Elemento 3</div>
</div>
<div class="d-flex align-items-end justify-content-end" >
  <div><Link to="/dflex1">
                    <span className="navbar-brand mb-0 h1">Continuar</span>
                </Link></div>
</div> 


        
        
        
        
        </div>
  )
}

export default Dflex