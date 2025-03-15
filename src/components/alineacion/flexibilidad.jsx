import React from "react";
import { Link } from "react-router-dom";

const Flexibility = () => {
  return (
    <div className="container text-center mb-5">
      <h2>Flexibilidad de los Elementos</h2>

      <div>
        <h5>Código HTML</h5>
        <div className="code-container">
          <pre>
            <code>
              <p className="ms-3 text-danger">&lt;div class="d-flex"&gt;</p>
              <p className="ms-5">&lt;div class="flex-grow-1"&gt;Elemento 1&lt;/div&gt;</p>
              <p className="ms-5">&lt;div&gt;Elemento 2&lt;/div&gt;</p>
              <p className="ms-3 text-danger">&lt;/div&gt;</p>
            </code>
          </pre>
        </div>
      </div>

      <p>Este es un ejemplo de flexibilidad con <code>.flex-grow-1</code>.</p>
      <div className="d-flex bg-light p-3 mb-3">
        <div className="p-2 bg-info flex-grow-1">Elemento 1</div>
        <div className="p-2 bg-info">Elemento 2</div>
      </div>

      <div className="justify-content-end">
        <Link to="/flexboxExamples">Back</Link>
      </div>
    </div>
  );
};

export default Flexibility;