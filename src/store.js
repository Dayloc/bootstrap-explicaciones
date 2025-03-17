// store.js
export const initialStore = () => {
  return {
    message: null,
    apiData: [], // Para almacenar múltiples personajes
    character: null, // Para almacenar un solo personaje
    loading: false, // Indica si la solicitud está en curso
    error: null, // Almacena errores de la solicitud
  };
};

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

//Funcion para hacer la peticion Get
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