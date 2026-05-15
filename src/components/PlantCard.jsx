import React, { useState } from "react";

function PlantCard({ plant }) {
  const { id, name, image, price } = plant

  const [inStock, setinStock] = useState(true)

  function handleToggleStock() {
    setinStock(!inStock);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleToggleStock}>In Stock</button>
      ) : (
        <button onClick={handleToggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
