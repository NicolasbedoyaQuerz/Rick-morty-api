import "./App.css";
import LocationSearch from "./components/LocationSearch";
import Logo from '/Logo.svg'

function App() {


  return (
    <div className="App bg-image">
      <img src={Logo} alt="Logo" className="logo" />
      <LocationSearch/>
    </div>
  );
}

export default App;
