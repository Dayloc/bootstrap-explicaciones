import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { fetchData, getUsers, createUser } from "../store";

function TodoUsers() {
  const { dispatch, store } = useGlobalReducer();
  const { loading, error, users } = store;

  // Obtener los datos al montar el componente
  useEffect(() => {
    fetchData(dispatch);
    getUsers(dispatch);
  }, [dispatch]);

  const handleCreateAndRefresh = async () => {
    const userName = "Karol"; // Nombre del usuario que deseas crear
    await createUser(dispatch, userName); // Pasa dispatch y el nombre del usuario
    await getUsers(dispatch); // Espera a que se actualice la lista de usuarios
  };

  // Mostrar un mensaje de carga mientras se obtienen los datos
  if (loading) {
    return <p>Cargando...</p>;
  }

  // Mostrar un mensaje de error si algo falla
  if (error) {
    return <p>Error: {error}</p>;
  }

  const hasUsers = users && Array.isArray(users.users);
  console.log(users);

  return (
    <div className="container text-center">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="m-4">Lista de Usuarios</h1>
        <div className="p-3 bg-secondary text-white">
          {hasUsers ? (
            users.users.map((item, index) => (
              <div key={item.id}>
                <div className="d-flex flex-row">
                  {index + 1} - {item.name}
                </div>
              </div>
            ))
          ) : (
            <p>No hay datos disponibles</p>
          )}
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={handleCreateAndRefresh}
        >
          Crear Usuario
        </button>
      </div>
    </div>
  );
}

export default TodoUsers;