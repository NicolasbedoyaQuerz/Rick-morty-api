import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResidentInfo from './ResidentInfo';

const LocationSearch = () => {
  const [locationId, setLocationId] = useState('');
  const [location, setLocation] = useState({});
  const [characters, setCharacters] = useState([]);
  const [randomLocationId, setRandomLocationId] = useState(Math.floor(Math.random() * 125) + 1);

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
      <label htmlFor="locationId">Buscar ubicación por ID:</label>
      <input id="locationId" type="text" value={locationId} onChange={handleLocationIdChange} />
      <button onClick={searchLocationById}>Buscar</button>
      {location.name && (
  <div className="location-info">
    <h1>Ubicación encontrada: {location.name}</h1>
    <div className="location-details">
      <div className="detail">
        <p>Nombre:</p>
        <p>{location.name}</p>
      </div>
      <div className="detail">
        <p>Tipo:</p>
        <p>{location.type}</p>
      </div>
      <div className="detail">
        <p>Dimensión:</p>
        <p>{location.dimension}</p>
      </div>
      <div className="detail">
        <p>Cantidad de residentes:</p>
        <p>{location.residents.length}</p>
      </div>
    </div>
    <h2>Residentes de la ubicación:</h2>
    <div className="residents-container">
      {location.residents.map(residentUrl => (
        <ResidentCard key={residentUrl} url={residentUrl} />
      ))}
    </div>
  </div>
)}
    </div>
  );
};

export default LocationSearch;
