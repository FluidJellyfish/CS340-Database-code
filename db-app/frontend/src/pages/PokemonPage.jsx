import { useState, useEffect } from 'react'; 
import axios from 'axios';

import PokemonTable from '../components/pokemon/PokemonTable';
import MovesPokemonTable from '../components/pokemon/MovesPokemonTable';

function PokemonPage() {
  const [pokemonData, setPokemonData] = useState([]);
  const [moveNames, setMoveNames] = useState([]);

  const fetchPokemonData = async () => {
    try {
        const response = await axios.get(import.meta.env.VITE_API_URL + 'pokemon/');
        setPokemonData(response.data);
        alert(jsonify(response.data));
    } catch (error) {
        console.error('Error fetching pokemon data:', error);
    };
  };


  const fetchMoveData = async () => {
    try {
        const response = await axios.get(import.meta.env.VITE_API_URL + 'moves/');
        setMoveNames(response.data);
        alert(jsonify(response.data));
    } catch (error) {
        console.error('Error fetching move data:', error);
    };
  }

  useEffect(() => {
    fetchMoveData();
    fetchPokemonData();
  }, []);

  return (
    <div>
      <h2>Pokemon</h2>
        <PokemonTable pokemons={pokemonData} />
        <h2>Movesets</h2>
        <MovesPokemonTable moveNames={moveNames}/>
    </div>
  );
}

export default PokemonPage;