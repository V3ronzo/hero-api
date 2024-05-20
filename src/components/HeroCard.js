import React from 'react';

const HeroCard = ({ hero }) => {
  return (
    <div>
      <img src={hero.image.url} alt={hero.name} />
      <h2>{hero.name}</h2>
      <p>{hero.biography['full-name']}</p>
      {/* Add more hero details as needed */}
    </div>
  );
};

export default HeroCard;