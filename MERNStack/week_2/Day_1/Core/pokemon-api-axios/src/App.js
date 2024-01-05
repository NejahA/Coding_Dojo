import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]);

  return (
    <div className="App">
      <button
        onClick={() => {
          axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
          .then(res=>setPokemons(res.data.results) )

        }}
      >
        Fetch Pokemon
      </button>
      <ul>
        {pokemons.map((el) => (
          <li>{el.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
