import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResidentInfo from './ResidentInfo';

const LocationSearch = () => {
  const [locationId, setLocationId] = useState(Math.floor(Math.random() * 126) + 1);
  const [location, setLocation] = useState({});
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    searchLocationById();
  }, []);

  const handleLocationIdChange = event => setLocationId(event.target.value);

  const searchLocationById = async () => {
    try {
      const locationResponse = await axios.get(`https://rickandmortyapi.com/api/location/${locationId}`);
      const searchedLocation = locationResponse.data;
      setLocation(searchedLocation);
      const characterResponses = await Promise.all(searchedLocation.residents.map(url => axios.get(url)));
      const searchedCharacters = characterResponses.map(response => response.data);
      setCharacters(searchedCharacters);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="search-container">
        <label htmlFor="locationId">Buscar ubicación por ID:</label>
        <input id="locationId" type="text" value={locationId} onChange={handleLocationIdChange} />
        <button onClick={searchLocationById}>Buscar</button>
      </div>
      {location.name && (
        <div className="location-info">
          <h1>Ubicación encontrada: {location.name}</h1>
          <h2>Tipo: {location.type}</h2>
          <h2>Dimensión: {location.dimension}</h2>
          <h2>Residentes:</h2>
          {characters.map(character => (
          <ResidentInfo key={character.id} url={character.url} />
          ))}
        </div>
        )}
    </div>
  );
};

export default LocationSearch;
