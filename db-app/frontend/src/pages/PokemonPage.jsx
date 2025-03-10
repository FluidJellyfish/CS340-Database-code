import { useState, useEffect } from 'react'; 
import axios from 'axios';

import PokemonTable from '../components/pokemon/PokemonTable';
import MovesPokemonTable from '../components/pokemon/MovesPokemonTable';

// Sample Data

const MOVES = [
  {id: 1, name: "Tackle", type: "Normal", damage: 40},
  {id: 2, name: "Flamethrower", type: "Fire", damage: 90},
  {id: 3, name: "Water Gun", type: "Water", damage: 40},
  {id: 4, name: "Thunderbolt", type: "Electric", damage: 90},
  {id: 5, name: "Vine Whip", type: "Grass", damage: 45},
  {id: 6, name: "Earthquake", type: "Ground", damage: 100}
];

function PokemonPage() {
  const [pokemonData, setPokemonData] = useState([]);

  const fetchPokemonData = async () => {
    try {
        const response = await axios.get(import.meta.env.VITE_API_URL + 'pokemon/');
        setPokemonData(response.data);
        alert(jsonify(response.data));
    } catch (error) {
        console.error('Error fetching pokemon data:', error);
    };
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  return (
    <div>
      <h2>Pokemon</h2>
        <PokemonTable pokemons={pokemonData} />
        <h2>Movesets</h2>
        <MovesPokemonTable/>
    </div>
  );
}

export default PokemonPage;