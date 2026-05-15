import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {

  const plantlistItems = plants.map((plant) => (<PlantCard key={plants.id} plant={plant} />))

  return (
    <ul className="cards">{plantlistItems}</ul>
  );
}

export default PlantList;
