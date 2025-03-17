import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { fetchCharacterById } from "../store";
import { useParams } from "react-router-dom"; // Importa useParams para obtener el id de la URL

const CharacterDetail = () => {
  const { dispatch, store } = useGlobalReducer();
  const { character, loading, error } = store;
  const { id } = useParams(); // Obtén el id de la URL

  console.log("ID from URL:", id); // Verifica que el ID sea correcto
  console.log("Character data:", character); // Verifica los datos del personaje

  useEffect(() => {
    if (id) {
      fetchCharacterById(dispatch, id); // Usa el id para obtener los detalles del personaje
    }
  }, [dispatch, id]); // Agrega "id" como dependencia

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!character) return <p>No se encontraron datos del personaje.</p>;

  return (
    <div className="container">
      <h1 className="text-center my-4">{character.name}</h1>
      <div className="row">
        <div className="col-12 col-md-6 mb-4">
          <div className="card p-3">
            <img
              src={character.image}
              alt={character.name}
              className="img-fluid mb-3"
              style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "10px" }}
            />
            <p><strong>Ki:</strong> {character.ki}</p>
            <p><strong>Max Ki:</strong> {character.maxKi}</p>
            <p><strong>Raza:</strong> {character.race}</p>
            <p><strong>Género:</strong> {character.gender}</p>
            <p><strong>Descripción:</strong> {character.description}</p>
            <p><strong>Afiliación:</strong> {character.affiliation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;