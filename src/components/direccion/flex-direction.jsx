import React from "react";
import direccion from "../../assets/img/direccion.avif";
import { Link } from "react-router-dom";

function FlexDirection() {
  return (
    <div className="container text-center">
      <div className="text-info m-3">
        Puedes controlar la dirección en la que se colocan los elementos (horizontal o vertical) usando las siguientes clases:
      </div>
      <img
        src={direccion}
        alt="direccion"
        className="direccion img-fluid rounded me-3 shadow p-3 mb-5 bg-body-tertiary rounded"
        style={{ maxWidth: "200px" }} // Ajusta el tamaño de la imagen
      />
      <div className="container text-start">
        <ul>
          <li>
            <Link to="/flex-row">flex-row: Elementos en fila (por defecto).</Link>
          </li>
          <li>
            <Link to="/flex-row-reverse">flex-row-reverse: Elementos en fila, pero en orden inverso.</Link>
          </li>
          <li>
            <Link to="/flex-column">flex-column: Elementos en columna.</Link>
          </li>
          <li>
            <Link to="/flex-column-reverse">flex-column-reverse: Elementos en columna, pero en orden inverso.</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FlexDirection;