import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { fetchCharacterById } from "../store";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CharacterDetail = () => {
  const { dispatch, store } = useGlobalReducer();
  const { character, loading, error } = store;
  const { id } = useParams();

  console.log("ID from URL:", id);
  console.log("Character data:", character);

  useEffect(() => {
    if (id) {
      fetchCharacterById(dispatch, id);
    }
  }, [dispatch, id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!character) return <p>No se encontraron datos del personaje.</p>;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Ocupa toda la altura de la pantalla
        backgroundColor: "#f8f9fa", // Fondo opcional
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          padding: "20px",
          backgroundColor: "#fff", // Fondo del contenedor
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sombra opcional
        }}
      >
        <h1 className="text-center my-4">{character.name}</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div className="card p-3 text-center align-items-center bg-dark text-white">
              <img
                src={character.image}
                alt={character.name}
                className="img-fluid mb-3"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              />
              <p>
                <strong>Ki:</strong> {character.ki}
              </p>
              <p>
                <strong>Max Ki:</strong> {character.maxKi}
              </p>
              <p>
                <strong>Raza:</strong> {character.race}
              </p>
              <p>
                <strong>Género:</strong> {character.gender}
              </p>
              <p>
                <strong>Descripción:</strong> {character.description}
              </p>
              <p>
                <strong>Afiliación:</strong> {character.affiliation}
              </p>
            </div>
          </div>
        </div>
        <div><Link className="bg-lhite" to="/dragonBallGet">BACK</Link></div>
      </div>
      
      
    </div>
  );
};

export default CharacterDetail;