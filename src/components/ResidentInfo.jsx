import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResidentInfo = ({ url }) => {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    const fetchResident = async () => {
      try {
        const response = await axios.get(url);
        setResident(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResident();
  }, [url]);

  if (!resident) {
    return <div>Cargando...</div>;
  }

  const { name, image, status, origin, episode } = resident;

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={`${name} avatar`} />
      <p>Status: {status}</p>
      <p>Origin: {origin.name}</p>
      <p>Episodes: {episode.length}</p>
    </div>
  );
};

export default ResidentInfo;
