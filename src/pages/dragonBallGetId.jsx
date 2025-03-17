import React from "react";
import CharacterDetail from "./characterDetail"

const DragonBallGetId = () => {
  return (
    <div>
      <h1>Dragon Ball Character Details</h1>
      <CharacterDetail id={1} /> {/* Cambia el ID según el personaje que quieras */}
    </div>
  );
};

export default DragonBallGetId;