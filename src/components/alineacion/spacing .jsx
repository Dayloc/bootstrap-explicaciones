import React from "react";
import { Link } from "react-router-dom";

const Spacing = () => {
  return (
    <div className="container text-center mb-5">
      <h2>Espaciado entre Elementos</h2>

      <div>
        <h5>Código HTML</h5>
        <div className="code-container">
          <pre>
            <code>
              <p className="ms-3 text-danger">&lt;div class="d-flex gap-3"&gt;</p>
              <p className="ms-5">&lt;div&gt;Elemento 1&lt;/div&gt;</p>
              <p className="ms-5">&lt;div&gt;Elemento 2&lt;/div&gt;</p>
              <p className="ms-3 text-danger">&lt;/div&gt;</p>
            </code>
          </pre>
        </div>
      </div>

      <p>Este es un ejemplo de espaciado entre elementos con <code>.gap-3</code>.</p>
      <div className="d-flex gap-3 bg-light p-3 mb-3">
        <div className="p-2 bg-danger text-white">Elemento 1</div>
        <div className="p-2 bg-danger text-white">Elemento 2</div>
      </div>

      <div className="justify-content-end">
        <Link to="/flexboxExamples">Back</Link>
      </div>
    </div>
  );
};

export default Spacing;