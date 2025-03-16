import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { fetchData } from "../store";

function Dragonball() {
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
      <h1 className="m-4">Dragonball</h1>
      <div className="row"> {/* Contenedor de la grid */}
        {hasData ? (
          apiData.items.map((item) => (
            <div className="col-12 col-md-4 mb-5" key={item.id}> {/* Cada columna */}
              <div className="dragonBall text-center p-3">
                <strong>{item.name}</strong> - Raza: {item.race} - Ki: {item.ki}
                <img src={item.image} alt={item.name} className="charactersImg img-fluid mt-2" />
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

export default Dragonball;