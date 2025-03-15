// store.js
export const initialStore = () => {
  return {
    message: null,   
    apiData: [] ,// Almacena los datos de la API
    loading: false, // Indica si la solicitud está en curso
    error: null, // Almacena errores de la solicitud
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "add_task":
      const { id, color } = action.payload;
      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === id ? { ...todo, background: color } : todo
        ),
      };
    case "fetch_data_start":
      return {
        ...store,
        loading: true, // Indica que la solicitud ha comenzado
        error: null, // Limpia cualquier error previo
      };
    case "fetch_data_success":
      return {
        ...store,
        loading: false, // Indica que la solicitud ha terminado
        apiData: action.payload, // Almacena los datos de la API
      };
    case "fetch_data_error":
      return {
        ...store,
        loading: false, // Indica que la solicitud ha terminado
        error: action.payload, // Almacena el error
      };
    default:
      throw Error("Unknown action.");
  }
}
export const fetchData = async (dispatch) => {
  try {
    // Despacha la acción para indicar que la solicitud ha comenzado
    dispatch({ type: "fetch_data_start" });

    // Realiza la solicitud a la API
    const response = await fetch("https://dragonball-api.com/api/characters"); // URL de la API
    const data = await response.json();

    // Despacha la acción para almacenar los datos obtenidos
    dispatch({ type: "fetch_data_success", payload: data });
  } catch (error) {
    // Despacha la acción para manejar el error
    dispatch({ type: "fetch_data_error", payload: error.message });
  }
};