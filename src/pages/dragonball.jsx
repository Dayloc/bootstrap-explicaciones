import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { fetchData } from "../store";

function Dragonball() {
  const { dispatch, store } = useGlobalReducer();

  useEffect(() => {
    fetchData(dispatch);
  }, [dispatch]);

  console.log(store);

  return (
    <div>
      <h1>Dragonball</h1>
      {store.loading ? (
        <p>Loading...</p>
      ) : store.error ? (
        <p>Error: {store.error}</p>
      ) : Array.isArray(store.apiData) ? ( // Verifica si apiData es un array
        <ul>
          {store.apiData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>No data available or data is not in the expected format.</p>
      )}
    </div>
  );
}

export default Dragonball;