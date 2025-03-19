import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { fetchData, getUsers, createUser } from "../store"; // Importa createUser

function TodoUsers() {
  const [user, setUser] = useState(""); // Estado para el input, inicializado como cadena vacía
  const { dispatch, store } = useGlobalReducer();
  const { loading, error, users } = store;

  // Obtener los datos al montar el componente
  useEffect(() => {
    fetchData(dispatch);
    getUsers(dispatch);
  }, []);

  // Mostrar un mensaje de carga mientras se obtienen los datos
  if (loading) {
    return <p>Cargando...</p>;
  }

  // Mostrar un mensaje de error si algo falla
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Función para manejar el cambio en el input
  const handleInputChange = (e) => {
    setUser(e.target.value); // Actualiza el estado con el valor del input
  };

  // Función para manejar el clic en el botón
  const handleCreateUser = () => {
    if (user.trim() === "") {
      alert("Por favor, ingresa un nombre de usuario"); // Validación básica
      return;
    }

    // Llama a la función createUser del store y pasa el valor del input
    createUser(dispatch, user);

    // Limpia el input después de enviar
    setUser("");

  };
  const hasUsers = users && Array.isArray(users.users);
  console.log(users)
  return (
    <div className="container text-center">
      {/* Formulario para crear un usuario */}
      <div>
        <input
          type="text"
          value={user} // El valor del input está controlado por el estado
          onChange={handleInputChange} // Maneja el cambio en el input
          placeholder="Ingresa el nombre del usuario"
        />
        <button onClick={handleCreateUser}>Crear usuario</button>
      </div>

      {/* Lista de usuarios */}
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
      </div>
    </div>
  );
}

export default TodoUsers;