import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const SearchForm = ({ onSearch }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputRef.current.value);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        placeholder="Search for a hero"
      />
      <button type="submit">Search</button>
    </form>
  );
};

const HeroCard = ({ hero }) => {
  return (
    <div className="hero-card">
      <img src={hero.image.url} alt={hero.name} />
      <div>
        <h2>{hero.name}</h2>
        <p>{hero.biography['full-name']}</p>
        {/* Add more hero details as needed */}
      </div>
    </div>
  );
};

const App = () => {
  const [hero, setHero] = useState(null);

  const searchHero = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://superheroapi.com/api/251c695bcfdf6f8c56e1bc538efb7c22/search/${searchTerm}`
      );
      const data = await response.json();
      const heroData = data.results[0];
      setHero(heroData);
    } catch (error) {
      console.error('Error fetching hero data:', error);
    }
  };

  return (
    <div className="app">
      <SearchForm onSearch={searchHero} />
      {hero && <HeroCard hero={hero} />}
    </div>
  );
};

export default App;