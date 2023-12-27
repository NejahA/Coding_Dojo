import { useState } from "react";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);

  return (
    <div className="App">
      <button
        onClick={() => {
          fetch("https://pokeapi.co/api/v2/pokemon")
            .then((res) => res.json())
            .then((res) => setPokemons(res.results));
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
