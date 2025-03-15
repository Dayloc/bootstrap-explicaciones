import React from "react";
import { Link } from "react-router-dom";
const FlexColumn = () => {
  return (
    <div className="container text-center">
      <h2>Flex Column</h2>

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
      <p>Este es un diseño en columna (flex-column). Los elementos se apilan verticalmente.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ padding: "10px", background: "lightblue" }}>Elemento 1</div>
        <div style={{ padding: "10px", background: "lightgreen" }}>Elemento 2</div>
        <div style={{ padding: "10px", background: "lightcoral" }}>Elemento 3</div>
      </div>
      <div className="justify-content-end"><Link to="/dFlexDirection">Back</Link></div>
    </div>
  );
};

export default FlexColumn;