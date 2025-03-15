import React from "react";
import { Link } from "react-router-dom";

const CompleteExample = () => {
  return (
    <div className="container text-center mb-5">
      <h2>Ejemplo Completo</h2>

      <div>
        <h5>Código HTML</h5>
        <div className="code-container">
          <pre>
            <code>
              <p className="ms-3 text-danger">&lt;div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3"&gt;</p>
              <p className="ms-5">&lt;div class="flex-grow-1"&gt;Elemento 1&lt;/div&gt;</p>
              <p className="ms-5">&lt;div&gt;Elemento 2&lt;/div&gt;</p>
              <p className="ms-5">&lt;div class="align-self-end"&gt;Elemento 3&lt;/div&gt;</p>
              <p className="ms-3 text-danger">&lt;/div&gt;</p>
            </code>
          </pre>
        </div>
      </div>

      <p>Este es un ejemplo completo que combina varias utilidades de Flexbox.</p>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 bg-light p-3">
        <div className="p-2 bg-primary text-white flex-grow-1">Elemento 1</div>
        <div className="p-2 bg-primary text-white">Elemento 2</div>
        <div className="p-2 bg-primary text-white align-self-end">Elemento 3</div>
      </div>

      <div className="justify-content-end">
        <Link to="/flexboxExamples">Back</Link>
      </div>
    </div>
  );
};

export default CompleteExample;