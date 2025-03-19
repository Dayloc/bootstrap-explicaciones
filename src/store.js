// Estado inicial
export const initialStore = () => {
  return {
    message: null,
    apiData: [], // Para almacenar múltiples personajes
    character: null, // Para almacenar un solo personaje
    loading: false, // Indica si la solicitud está en curso
    error: null, // Almacena errores de la solicitud
    users: [], // Para almacenar los usuarios
  };
};

// Reducer
export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "fetch_data_start":
      return {
        ...store,
        loading: true,
        error: null,
      };
    case "fetch_data_success":
      return {
        ...store,
        loading: false,
        apiData: action.payload, // Almacena múltiples personajes
      };
    case "fetch_character_success":
      return {
        ...store,
        loading: false,
        character: action.payload, // Almacena un solo personaje
      };
    case "fetch_users_success":
      return {
        ...store,
        loading: false,
        users: action.payload, // Almacena los usuarios
      };
    case "fetch_data_error":
      return {
        ...store,
        loading: false,
        error: action.payload,
      };
    default:
      throw Error("Unknown action.");
  }
}

// Función para obtener datos de la API de personajes
export const fetchData = async (dispatch) => {
  try {
    dispatch({ type: "fetch_data_start" });

    const response = await fetch("https://dragonball-api.com/api/characters");
    const data = await response.json();

    dispatch({ type: "fetch_data_success", payload: data });
  } catch (error) {
    dispatch({ type: "fetch_data_error", payload: error.message });
  }
};

// Función para obtener un personaje por ID
export const fetchCharacterById = async (dispatch, id) => {
  try {
    dispatch({ type: "fetch_data_start" });

    const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
    const data = await response.json();

    dispatch({ type: "fetch_character_success", payload: data });
  } catch (error) {
    dispatch({ type: "fetch_data_error", payload: error.message });
  }
};

// Función para obtener usuarios
export const getUsers = async (dispatch) => {
  try {
    dispatch({ type: "fetch_data_start" });

    const response = await fetch("https://playground.4geeks.com/todo/users");
    const data = await response.json();

    dispatch({ type: "fetch_users_success", payload: data });
  } catch (error) {
    dispatch({ type: "fetch_data_error", payload: error.message });
  }
};
export const createUser = async (dispatch, user) => {
  try {
    // Indica que la solicitud ha comenzado
    dispatch({ type: "fetch_data_start" });

    // Realiza la solicitud POST a la API
    const response = await fetch(`https://playground.4geeks.com/todo/users/${user}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      throw new Error("Error al crear el usuario");
    }

    // Lee el cuerpo de la respuesta una sola vez
    const data = await response.json();

    // Despacha la acción para indicar que el usuario se creó correctamente
    dispatch({ type: "create_user_success", payload: data });

    // Vuelve a obtener la lista de usuarios actualizada
    getUsers(dispatch);
  } catch (error) {
    // Despacha la acción para manejar el error
    dispatch({ type: "fetch_data_error", payload: error.message });
  }
};