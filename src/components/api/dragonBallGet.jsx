import React, { useEffect } from "react";
import useGlobalReducer from "../../hooks/useGlobalReducer";
import { fetchData } from "../../store";
import peticionGet from "../../assets/img/peticionGet.png";
import tratamientodeErrores from "../../assets/img/tratamientodeErrores.png";
import almacenarVar from "../../assets/img/almacenarVar.png";
import importaciones from "../../assets/img/importaciones.png";

function DragonBallGet() {
  const { dispatch, store } = useGlobalReducer();

  // Efecto para cargar los datos al montar el componente
  useEffect(() => {
    fetchData(dispatch);
  }, [dispatch]);

  // Desestructuración del estado
  const { apiData, loading, error } = store;

  // Mostrar un mensaje de carga mientras se obtienen los datos
  if (loading) {
    return <p>Cargando...</p>;
  }

  // Mostrar un mensaje de error si algo falla
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Verificar si apiData está definido y tiene la propiedad items
  const hasData = apiData && Array.isArray(apiData.items);

  // Mostrar los datos si están disponibles
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="mt-5">
        <h3 className="text-info">
          En esta parte explicaremos como implementar peticiones a una API.
        </h3>
      </div>
      <div className="d-flex flex-column justify-content-start aling-self-start">
        <h4 className="text-danger">Pasos a seguir:</h4>
        <ol>
          <li>Crear la funcion "GET" en el Store de nuestra app</li>
          <img
            src={peticionGet}
            alt="peticionGet"
            className="peticion img-fluid rounded me-3 shadow p-3 mb-5 bg-body-tertiary rounded"
            style={{ maxWidth: "800px" }} // Ajusta el tamaño de la imagen
          />
          <li>Agregar los casos de errores en nuestro storeReducer </li>
          <img
            src={tratamientodeErrores}
            alt="tratamientodeErrores"
            className="erores img-fluid rounded me-3 shadow p-3 mb-5 bg-body-tertiary rounded"
            style={{ maxWidth: "800px" }} // Ajusta el tamaño de la imagen
          />
          <li>
            Crear las variables que me almacenaran en el store los datos que me
            devuelve la API
            <img
            src={almacenarVar}
            alt="almacenarVar"
            className="almacenarVar img-fluid rounded me-3 shadow p-3 mb-5 bg-body-tertiary rounded"
            style={{ maxWidth: "800px" }} // Ajusta el tamaño de la imagen
          />

          </li>

          <li> Hacer las importaciones en el componente en el cual vallamos a mostrar esos datos.</li>
          <img
            src={importaciones}
            alt="importaciones"
            className="importaciones img-fluid rounded me-3 shadow p-3 mb-5 bg-body-tertiary rounded"
            style={{ maxWidth: "800px" }} // Ajusta el tamaño de la imagen
          />
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </div>
      <h1 className="m-4">Dragonball</h1>
      <div className="row">
        {" "}
        {/* Contenedor de la grid */}
        {hasData ? (
          apiData.items.map((item) => (
            <div className="col-12 col-md-4 mb-5" key={item.id}>
              {" "}
              {/* Cada columna */}
              <div className="dragonBall text-center p-3">
                <strong>{item.name}</strong> - Raza: {item.race} - Ki: {item.ki}
                <img
                  src={item.image}
                  alt={item.name}
                  className="charactersImg img-fluid mt-2"
                />
              </div>
            </div>
          ))
        ) : (
          <p>No hay datos disponibles</p>
        )}
      </div>
    </div>
  );
}

export default DragonBallGet;
