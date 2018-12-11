import React from 'react';

const Card = ({
  card: {
    titre_formation,
    domaine,
    etablissement,
    ville,
    nb_places,
    frais
  }
}) => (
  <div className="card"> 
    <div className="card-content">
      <div className="card-header-container">
        <h1 className="domaine">{domaine}</h1>
        <h1 className="titre">{titre_formation}</h1>
        <h2 className="details">
          <span className="entry">{etablissement}</span>
          <span className="entry">{ville}</span>
        </h2>
      </div>
      <div className="class-footer-container">
        <div className="nb_places">
          {nb_places} places
        </div>
        <div className="frais">
          {frais} euros
        </div>
      </div>
    </div>
  </div>
)

export default Card;