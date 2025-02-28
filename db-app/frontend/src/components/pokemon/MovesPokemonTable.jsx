import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

const MOVENAMES = [
    "Rock Smash",
    "Fireball",
    "Vine Whip"
]

const handleDelete = (id, fetchMovesPokemonData) => {
    try {
        const URL = import.meta.env.VITE_API_URL + 'pokemon/moves/delete/' + id;
        axios.delete(URL);
        alert('Move deleted from Pokemon\'s moveset successfully!');
        fetchMovesPokemonData();
    } catch {
        console.error('Error deleting move from Pokemon\'s moveset: ', error);
        alert('Error deleting move from Pokemon\'s moveset');
    }
};

const handleUpdate = (id,moveName, fetchMovesPokemonData) => {
    try {
        const URL = import.meta.env.VITE_API_URL + 'pokemon/moves/update/';
        const data = {
            pokemonMovesID: id,
            newMoveName: moveName
        };
        axios.put(URL, data);
        fetchMovesPokemonData();
        alert('Move updated in Pokemon\'s moveset successfully!');
    } catch {
        console.error('Error updating move from Pokemon\'s moveset: ', error);
        alert('Error updating move from Pokemon\'s moveset');
    }
};

function MovesPokemonRow({movePokemon, fetchMovesPokemonData}){
    const move_names = MOVENAMES.filter(name => name != movePokemon.move_name);
    return (
        <tr>
            <td>{movePokemon.pokemon_moves_id}</td>
            <td>{movePokemon.pokemon_id}</td>
            <td>{movePokemon.pokemon_name}</td>
            <td>{movePokemon.move_id}</td>
            <td>{movePokemon.move_name}</td>
            <td>
                <select>
                    {move_names.map(name => (
                        <option key={name} value={name}>{name}</option>
                    ))}
                </select>
            </td>
            <td><button onClick={() => handleUpdate(movePokemon.pokemon_moves_id, movePokemon.move_name, fetchMovesPokemonData)}>Update</button></td>
            <td><button onClick={() => handleDelete(movePokemon.pokemon_moves_id, fetchMovesPokemonData)}>Delete</button></td>
        </tr>
    );
}

function NewTrainerButton() {
    return (
        <Link to="/pokemon/new">
            <button>Add a Move to a Pokemon's Moveset</button>
        </Link>
    );
}

function PokemonFilterField({ pokemonNames, selectedPokemon, setSelectedPokemon }) {
    const handleChange = (event) => {
        setSelectedPokemon(event.target.value);
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <select value={selectedPokemon} onChange={handleChange}>
                <option value="">-- All Pokemon --</option>
                {pokemonNames.map(name => (
                    <option key={name} value={name}>{name}</option>
                ))}
            </select>
        </form>
    );
}

export default function MovesPokemonTable({}) {
    const [selectedPokemon, setSelectedPokemon] = useState('');
    const [movesPokemon, setMovesPokemon] = useState([]);
    const [pokemonNames, setPokemonNames] = useState([]);
    const fetchMovesPokemonData = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_API_URL + 'pokemon/moves');
            //alert(JSON.stringify(response.data));
            setMovesPokemon(response.data);
            setPokemonNames([...new Set(response.data.map(item => item.pokemon_name))]);
        } catch (error) {
            console.error('Error fetching moves pokemon data:', error);
        };
    };

    useEffect(() => {
        fetchMovesPokemonData();
    }, []);

    // Fetch moves for a specific Pokemon when selectedPokemon changes
    useEffect(() => {
        const fetchFilteredMoves = async () => {
            try {
                if (selectedPokemon != '') {
                    setMovesPokemon([]);
                    const response = await axios.get(import.meta.env.VITE_API_URL + 'pokemon/moves/' + selectedPokemon);
                    setMovesPokemon(response.data);
                } else {
                    // If no Pokemon is selected, fetch all moves
                    fetchMovesPokemonData();
                }
            } catch (error) {
                console.error('Error fetching filtered moves:', error);
            }
        };
        fetchFilteredMoves();
    }, [selectedPokemon]);

    // Extract unique pokemon names

    return (
        <div>
            <PokemonFilterField pokemonNames={pokemonNames} selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} />
            <NewTrainerButton />
            <table>
                <thead>
                    <tr>
                        <th>Pokemon-Moves ID</th>
                        <th>Pokemon ID</th>
                        <th>Pokemon Name</th>
                        <th>Move ID</th>
                        <th>Move Name</th>
                    </tr>
                </thead>
                <tbody>
                    {movesPokemon.map(movePokemon => (
                        <MovesPokemonRow key={movePokemon.move_pokemon_id} movePokemon={movePokemon} fetchMovesPokemonData={fetchMovesPokemonData}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}