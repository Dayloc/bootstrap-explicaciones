import React, { useEffect } from "react";
import useGlobalReducer from "../../hooks/useGlobalReducer";
import { fetchData } from "../../store";
import { Link } from "react-router-dom"; // Importa Link

function DragonBallGet() {
  const { dispatch, store } = useGlobalReducer();
  // Desestructuración del estado
  const { apiData, loading, error } = store;

  // Hook para cargar los datos al montar el componente
  useEffect(() => {
    fetchData(dispatch);
  }, [dispatch]);

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
      <h1 className="m-4">Personajes de Dragon Ball</h1>
      <div className="row">
        {hasData ? (
          apiData.items.map((item) => (
            <div className="col-12 col-md-4 mb-4" key={item.id}>
             <Link to={`/characterDetail/${item.id}`} className="text-decoration-none"> {/* Enlace al detalle */}
                <div className="card p-3 text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid mb-3"
                    style={{ width: "200px", height: "200px", objectFit: "contain", borderRadius: "10px" }}
                  />
                  <h5>{item.name}</h5>
                  <p><strong>Raza:</strong> {item.race}</p>
                  <p><strong>Ki:</strong> {item.ki}</p>
                </div>
              </Link>
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