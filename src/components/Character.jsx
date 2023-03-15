import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Character = ({ url }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(url);
        setCharacter(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCharacter();
  }, [url]);

  if (!character) {
    return null;
  }

  return (
    <li>
      <img src={character.image} alt={character.name} />
      <div>
        <h3>{character.name}</h3>
      </div>
    </li>
  );
};

export default Character;
