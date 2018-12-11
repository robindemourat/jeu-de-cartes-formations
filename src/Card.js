import React from 'react';

const Card = ({
  card: {
    nom,
    effectifs,
    ville
  }
}) => (
  <div className="card"> 
    <h1>{nom}</h1>
    <h2>{effectifs}</h2>
    <h3>{ville}</h3>
  </div>
)

export default Card;