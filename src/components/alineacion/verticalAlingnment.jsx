import React from "react";
import { Link } from "react-router-dom";

const VerticalAlignment = () => {
  return (
    <div className="container text-center mb-5">
      <h2>Alineación Vertical</h2>

      <div>
        <h5>Código HTML</h5>
        <div className="code-container">
          <pre>
            <code>
              <p className="ms-3 text-danger">&lt;div class="d-flex align-items-center"&gt;</p>
              <p className="ms-5">&lt;div&gt;Elemento 1&lt;/div&gt;</p>
              <p className="ms-5">&lt;div&gt;Elemento 2&lt;/div&gt;</p>
              <p className="ms-3 text-danger">&lt;/div&gt;</p>
            </code>
          </pre>
        </div>
      </div>

      <p>Este es un ejemplo de alineación vertical con <code>.align-items-center</code>.</p>
      <div className="d-flex align-items-center bg-light p-3 mb-3" style={{ height: "100px" }}>
        <div className="p-2 bg-success text-white">Elemento 1</div>
        <div className="p-2 bg-success text-white">Elemento 2</div>
      </div>

      <div className="justify-content-end">
        <Link to="/flexboxExamples">Back</Link>
      </div>
    </div>
  );
};

export default VerticalAlignment;