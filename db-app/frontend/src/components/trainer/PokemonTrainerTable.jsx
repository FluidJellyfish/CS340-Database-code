import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

const handleDelete = async (id, fetchPokemonTrainerData) => {
    try {
        const URL = import.meta.env.VITE_API_URL + 'trainers/pokemon/delete/' + id;
        await axios.delete(URL);
        alert('Pokemon deleted from Trainer successfully!');
        fetchPokemonTrainerData();
    } catch (error) {
        console.error('Error deleting Pokemon from Trainer: ', error);
        alert('Error deleting Pokemon from Trainer');
    }
};

function PokemonTrainerRow({pokemonTrainer, fetchPokemonTrainerData}){
    return (
        <tr>
            <td>{pokemonTrainer.trainer_id}</td>
            <td>{pokemonTrainer.trainer_name}</td>
            <td>{pokemonTrainer.pokemon_id}</td>
            <td>{pokemonTrainer.pokemon_name}</td>
            <td><button type = "button" onClick={() => handleDelete(pokemonTrainer.pokemon_trainer_id, fetchPokemonTrainerData)}>Delete</button> </td>
        </tr>
    );
}


function NewTrainerButton() {
    return (
        <Link to="/trainers/new">
            <button>Add a Pokemon to a Trainer's Team</button>
        </Link>
    );
}

export default function PokemonTrainerTable() {
    const [selectedTrainer, setSelectedTrainer] = useState('');
    const [pokemonTrainers, setPokemonTrainers] = useState([]);
    const [uniqueTrainerNames, setUniqueTrainerNames] = useState([]);

    const fetchPokemonTrainerdata = async() => {
        try{
            const response = await axios.get(import.meta.env.VITE_API_URL + 'trainers/pokemon/');
            setPokemonTrainers(response.data);
            setUniqueTrainerNames([...new Set(response.data.map(item => item.trainer_name))]);
        } catch(error){
            console.error('Error fetching pokemonTrainer data: ', error);
        }
        
    }

    function TrainerFilterField() {
        const handleChange = (event) => {
            setSelectedTrainer(event.target.value);
        };
    
        return (
            <form onSubmit={(e) => e.preventDefault()}>
                <select value={selectedTrainer} onChange={handleChange}>
                    <option value="">-- All Trainers --</option>
                    {uniqueTrainerNames.map(id => (
                        <option key={id} value={id}>{id}</option>
                    ))}
                </select>
            </form>
        );
    }

    useEffect(() => {
        fetchPokemonTrainerdata();
    }, []);

    useEffect(() => {
        const fetchFilteredMoves = async () => {
            
            try {
                if (selectedTrainer != '') {
                    setPokemonTrainers([]);
                    
                    const response = await axios.get(import.meta.env.VITE_API_URL + 'trainers/pokemon/' + selectedTrainer);
                    
                    setPokemonTrainers(response.data);
                    
                } else {
                    // If no Pokemon is selected, fetch all moves
                    fetchPokemonTrainerdata();
                }
            } catch (error) {
                console.error('Error fetching filtered moves:', error);
            }
        };
        fetchFilteredMoves();
    }, [selectedTrainer]);

    return (
        <div>
            <TrainerFilterField trainerIds={uniqueTrainerNames}/>
            <NewTrainerButton />
            <table>
                <thead>
                    <tr>
                        <th>Trainer ID</th>
                        <th>Pokemon ID</th>
                        <th>Pokemon Name</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemonTrainers.map(pokemonTrainer => (
                        <PokemonTrainerRow pokemonTrainer={pokemonTrainer} fetchPokemonTrainerData={fetchPokemonTrainerdata} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}