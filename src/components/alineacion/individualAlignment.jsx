import React from "react";
import { Link } from "react-router-dom";

const IndividualAlignment = () => {
  return (
    <div className="container text-center mb-5">
      <h2>Alineación Individual</h2>

      <div>
        <h5>Código HTML</h5>
        <div className="code-container">
          <pre>
            <code>
              <p className="ms-3 text-danger">&lt;div class="d-flex"&gt;</p>
              <p className="ms-5">&lt;div class="align-self-start"&gt;Elemento 1&lt;/div&gt;</p>
              <p className="ms-5">&lt;div class="align-self-center"&gt;Elemento 2&lt;/div&gt;</p>
              <p className="ms-5">&lt;div class="align-self-end"&gt;Elemento 3&lt;/div&gt;</p>
              <p className="ms-3 text-danger">&lt;/div&gt;</p>
            </code>
          </pre>
        </div>
      </div>

      <p>Este es un ejemplo de alineación individual con <code>.align-self-*</code>.</p>
      <div className="d-flex bg-light p-3 mb-3" style={{ height: "100px" }}>
        <div className="p-2 bg-warning align-self-start">Elemento 1</div>
        <div className="p-2 bg-warning align-self-center">Elemento 2</div>
        <div className="p-2 bg-warning align-self-end">Elemento 3</div>
      </div>

      <div className="justify-content-end">
        <Link to="/flexboxExamples">Back</Link>
      </div>
    </div>
  );
};

export default IndividualAlignment;