import React from "react";
import { Link } from "react-router-dom";

const Responsiveness = () => {
  return (
    <div className="container text-center mb-5">
      <h2>Responsividad</h2>

      <div>
        <h5>Código HTML</h5>
        <div className="code-container">
          <pre>
            <code>
              <p className="ms-3 text-danger">&lt;div class="d-flex flex-column flex-md-row"&gt;</p>
              <p className="ms-5">&lt;div&gt;Elemento 1&lt;/div&gt;</p>
              <p className="ms-5">&lt;div&gt;Elemento 2&lt;/div&gt;</p>
              <p className="ms-3 text-danger">&lt;/div&gt;</p>
            </code>
          </pre>
        </div>
      </div>

      <p>Este es un ejemplo de responsividad con <code>.flex-column</code> y <code>.flex-md-row</code>.</p>
      <div className="d-flex flex-column flex-md-row bg-light p-3 mb-3">
        <div className="p-2 bg-secondary text-white">Elemento 1</div>
        <div className="p-2 bg-secondary text-white">Elemento 2</div>
      </div>

      <div className="justify-content-end">
        <Link to="/flexboxExamples">Back</Link>
      </div>
      <p className="bg-info">El tema responsive se usa para poder ubicar los elementos a medida de la pantalla, según sea la pantalla va ha ser la posición de cada elemento dentro del contenedor.</p>
    </div>
  );
};

export default Responsiveness;