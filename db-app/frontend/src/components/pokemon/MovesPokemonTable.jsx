import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Component } from "react";
import axios from 'axios';

const handleDelete = async (id, fetchMovesPokemonData) => {
    try {
        const URL = import.meta.env.VITE_API_URL + 'pokemon/moves/delete/' + id;
        await axios.delete(URL);
        alert('Move deleted from Pokemon\'s moveset successfully!');
        fetchMovesPokemonData();
    } catch (error) {
        console.error('Error deleting move from Pokemon\'s moveset: ', error);
        alert('Error deleting move from Pokemon\'s moveset');
    }
};

function MovesPokemonRow({movePokemon, fetchMovesPokemonData, moveNames}){
    async function handleUpdate(formData) {
        try {
            const moveName = formData.get('moveName');
            const URL = import.meta.env.VITE_API_URL + 'pokemon/moves/update/';
            const data = {
                pokemonMovesID: movePokemon.pokemon_moves_id,
                newMoveName: moveName
            };
            await axios.put(URL, data);
            fetchMovesPokemonData();
            alert('Move updated in Pokemon\'s moveset successfully!');
        } catch (error) {
            console.error('Error updating move from Pokemon\'s moveset: ', error);
            alert('Error updating move from Pokemon\'s moveset');
        }
    };

    

    const move_names = moveNames.filter(name => name.move_name != movePokemon.move_name);
    return (
        <tr>
            <td>{movePokemon.pokemon_moves_id}</td>
            <td>{movePokemon.pokemon_id}</td>
            <td>{movePokemon.pokemon_name}</td>
            <td>{movePokemon.move_id}</td>
            <td>{movePokemon.move_name}</td>
            <td>
            <form form onSubmit={(e) => { 
                e.preventDefault(); 
                const formData = new FormData(e.target);
                handleUpdate(formData);
            }}>
                <select name="moveName">
                    {move_names.map(name => (
                        <option key={name} value={name.move_name}>{name.move_name}</option>
                    ))}
                </select>
                <button type="submit">Update</button>
            </form>
            </td>
            <td><button type="button" onClick={() => handleDelete(movePokemon.pokemon_moves_id, fetchMovesPokemonData)}>Delete</button></td>
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

export default function MovesPokemonTable({moveNames}) {
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
                        <MovesPokemonRow key={movePokemon.move_pokemon_id} movePokemon={movePokemon} fetchMovesPokemonData={fetchMovesPokemonData} moveNames={moveNames}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}