import { useState, useEffect } from 'react';  
import axios from 'axios';

import TypeInput from "../components/TypeInput";



const MOVENAMES = [
    "Rock Smash",
    "Fireball",
    "Vine Whip"
];

function NewPokemonPage() {
    // State repeated. Really should be passed down by common parent shared with PokemonPage/MovePage, instead I just query the db again on load
    const [pokemonNames, setPokemonNames] = useState([]);
    const [moveNames, setMoveNames] = useState([]);

    const fetchPokemonData = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_API_URL + 'pokemon/');
            setPokemonNames(response.data);
            //alert(jsonify(response.data));
        } catch (error) {
            console.error('Error fetching pokemon data:', error);
        };
      };
    
    useEffect(() => {
        fetchPokemonData();
    }, []);

    const fetchMoveData = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_API_URL + 'moves/');
            setMoveNames(response.data);
            //alert(jsonify(response.data));
        } catch (error) {
            console.error('Error fetching move data:', error);
        };
    };  
    
    useEffect(() => {
        fetchMoveData();
    }, []);

    function addPokemon(formData) {
        try { 
            const URL = import.meta.env.VITE_API_URL + 'pokemon/create';
            const data = {
                pokemonName: formData.get('newPokemonName'),
                pokemonType: formData.get('newPokemonType'),
                pokemonHealth: formData.get('newPokemonHealth')
            };
            axios.post(URL, data);
            alert(`Pokemon ${data.name} added successfully!`);
        } catch {
            console.error('Error adding Pokemon: ', error);
            alert('Error adding Pokemon');
        }
    };

    function addMoveToPokemon(formData) {
        try { 
            const URL = import.meta.env.VITE_API_URL + 'pokemon/moves/create';
            const data = {
                pokemonName: formData.get('newMovePokemonName'),
                moveName: formData.get('newMoveName')
            };
            axios.post(URL, data);
            alert('Move added to Pokemon\'s moveset successfully!');
        } catch {
            console.error('Error adding move to Pokemon\'s moveset: ', error);
            alert('Error adding move to Pokemon\'s moveset');
        }
      
    }

    const handleAddPokemonSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        addPokemon(formData);   
    };

    const handleAddMoveSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        addMoveToPokemon(formData);
    };


    
    return (
        <div>
            <h2>Add a New Pokemon</h2>
            <form className="pokemon-input" onSubmit={handleAddPokemonSubmit}>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Health</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" name="newPokemonName"/></td>
                        <td><TypeInput name={"newPokemonType"}/></td>
                        <td><input type="number" name="newPokemonHealth"/></td>
                    </tr>
                </tbody>
            </table> 
            <button type="submit">Add Pokemon</button>
            </form>
            <h2>Add a Move to a Pokemon's Moveset</h2>
            <form onSubmit={handleAddMoveSubmit}>
            <table>
                <thead>
                    <tr>
                        <th>Pokemon Name</th>
                        <th>Move Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <select name="newMovePokemonName">
                            {pokemonNames.map((name, index) => (
                                <option key={index} value={name.pokemon_name}>{name.pokemon_name}</option>
                            ))}
                        </select>
                        </td>
                        <td>
                        <select name="newMoveName">
                            {moveNames.map((name, index) => (
                                <option key={index} value={name.move_name}>{name.move_name}</option>
                            ))}
                        </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button type="submit">Add Move to Pokemon</button>
            </form>
        </div>
    );
}

export default NewPokemonPage;