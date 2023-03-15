import React from 'react';
import Character from './Character';

const CharactersList = ({ characters }) => (
  <ul>
    {characters.map(character => (
      <Character key={character.id} url={character.url} />
    ))}
  </ul>
);

export default CharactersList;
