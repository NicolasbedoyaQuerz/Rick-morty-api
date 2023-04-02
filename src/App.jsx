import { useState, useEffect } from "react"
import Location from "./components/Location"
import InfoResident from "./components/InfoResident"
import axios from "axios"
import "./index.css"
import Logo from '/Logo.svg'


function App() {

const [ character, setCharacter ] = useState({})
const [ personArray, setPersonArray ] = useState([]) 
const [ num, setNum ] = useState("")
const id = Math.floor(Math.random(1) * 126);


useEffect (() => { 

    axios
    .get(`https://rickandmortyapi.com/api/location/${id}`)
    .then (resp => {setCharacter(resp.data)
        setPersonArray(resp.data?.residents)})
    .catch (error => console.error(error))
    

    }, [] )

    const userLocation = () => {
        axios
        .get(`https://rickandmortyapi.com/api/location/${num}`)
        .then (resp => {setCharacter(resp.data)
                        setPersonArray(resp.data?.residents)})
        .catch (error => console.error(error)) 
    }


  return (
    <div className="contenedor-principal">
        <div className="container-info">
        <div className="logo-header"> 
            <img className="logo" src="logo.svg" alt="" />
        </div>
        <div className="Searching">
            <input type="text" value={num} onChange={(e)=>setNum(e.target.value)} />
            <button onClick={userLocation}>Search</button>
        </div>
        </div>
        <Location infolocation = {character} />
        <div className="Second-Fondo">
        <ul className="container">
        {personArray.map((residents) => (
        <InfoResident key={residents} infolocation={residents}/>
        ))}

        </ul>
        </div>
    </div>
  )
}

export default App