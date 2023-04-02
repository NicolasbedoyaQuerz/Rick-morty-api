import axios from "axios";
import {useState, useEffect} from "react";


const InfoResident = ({infolocation}) => {
const [character, setCharacter] = useState({})

useEffect(()=>{
axios
.get(infolocation)
    .then (resp => setCharacter(resp.data))
    .catch (error => console.error(error))

},[])

  return (
    <div className="card">
    <li >
        <div className="card-container">
        <img className="img-card" src={character.image} alt="" />
        <h2 className="nomber-card">{character.name}</h2>
        <div className="card-info">
        <p className="card-info-p">Status: {character.status}</p>
                <p className="card-info-p">Origen: {character.origin?.name}</p>
                <p className="card-info-p">Especie: {character.species}</p>
                <p className="card-info-p">Apariciones: {character.episode?.length}</p>
            </div>
            
            </div>           
        </li>
       </div>
  )
}

export default InfoResident