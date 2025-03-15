import React from 'react'
import { Link } from 'react-router-dom';

function Dflex1() {
  return (
    <div className='container text-center'>
        
        <h4 className='mt-3 text-primary mb-5'>2. d-flex flex-column</h4>
        <div>
        <h5 className=''>Código HTML </h5>
        
        
        <div class="code-container  ">
              <pre>
                <code>
           <p className='ms-3 text-danger'>&lt;div class="d-flex flex-column"&gt;</p>
         <p className='ms-5'>&lt;div&gt;Elemento 1&lt;/div&gt;</p> 
          <p className='ms-5'>&lt;div&gt;Elemento 2&lt;/div&gt;</p>
          <p className='ms-5'>&lt;div&gt;Elemento 3&lt;/div&gt;</p>
         <p className='text-danger'>&lt;/div&gt;</p>     
              </code>
              </pre>
        </div>
          
        </div>
        
        <h5>Resultado:</h5>
        <div className="d-flex flex-column mb-3">
          <div className='bg-secondary'>Elemento 1</div>
          <div className='bg-primary-subtle'>Elemento 2</div>
          <div className='bg-primary'>Elemento 3</div>
        </div>
        <hr />
     
        <h4 className='mt-3 text-primary mb-5'>3. d-flex flex-column-reverse</h4>
        <h5>Resultado:</h5>
        <div className="d-flex flex-column-reverse mb-3">
          <div className='bg-secondary'>Elemento 1</div>
          <div className='bg-primary-subtle'>Elemento 2</div>
          <div className='bg-primary'>Elemento 3</div>
        </div>
                     <div className="justify-content-end"><Link to="/dflex">Back</Link></div>
                
                
                
              
    </div>
  )
}

export default Dflex1;