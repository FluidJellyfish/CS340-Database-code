import axios from "axios";
import { useState, useEffect } from "react";



function NewTrainerPage() {

    const [trainerIds, setTrainerIds] = useState([]);
    const [pokemonNames, setPokemonNames] = useState([]);


    const fetchTrainerData = async() => {
        try {
            const response = await axios.get(import.meta.env.VITE_API_URL + 'pokemon/trainers/');
            setTrainerIds(response.data);
            //alert(jsonify(response.data));

        } catch (error) {
            console.error('Error fetching trainer data:', error);
        };
    };

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
        fetchTrainerData();
        fetchPokemonData();
    }, []);

    function addTrainer(formData){
        try{
            const URL = import.meta.env.VITE_API_URL + 'pokemon/trainers/create'
            //"//flip1.engr.oregonstate.edu:58675/api/pokemon/trainers/create";
            const data = {
                items_held: formData.get('newTrainerHeldItems'),
                battle_record: formData.get('newTrainerBattleRecord')
            };
            console.log(data)
            axios.post(URL, data);
            //alert(`Trainer record ${data.battle_record} added successfully!`);
            //alert(`Trainer item ${data.items_held} added successfully!`);
        } catch (error){
            console.error('Error adding Trainer: ', error);
            alert('Error adding Trainer');
        }
    };


    function addPokemonToTrainer(formData) {
        try {
            const URL = import.meta.env.VITE_API_URL + 'trainers/pokemon/create';
            const data = {
                pokemonName: formData.get('newPokemonName'),
                trainerID: formData.get('newPokemonTrainerID')
            };
            axios.post(URL, data);
            alert('Pokemon added to Trainer\'s team successfully!');
        } catch {
            console.error('Error adding Pokemon to Trainer\'s team: ', error);
            alert('Error adding Pokemon to Trainer\'s team');
        }
    };


    const handleAddTrainerSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        addTrainer(formData);
    };

    const handleAddPokemonToTrainerSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        addPokemonToTrainer(formData);
    };


    return (
        <div>
            <h2>Add a New Trainer</h2>
            <form className="trainer-input" onSubmit = {handleAddTrainerSubmit}>
            <table>
                <thead>
                    <tr>
                        <th>Held Items</th>
                        <th>Battle Record</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" name="newTrainerHeldItems"/></td>
                        <td><input type="text" name ="newTrainerBattleRecord"/></td>
                    </tr>
                </tbody>
            </table> 
            <button type="submit">Add Trainer</button>
            </form>
            <h2>Add a Pokemon to a Trainer's Team</h2>
            <form className="trainer-team-edit" onSubmit={handleAddPokemonToTrainerSubmit}>
            <table>
                <thead>
                    <tr>
                        <th>Pokemon</th>
                        <th>Trainer ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>
                    <select name="newPokemonName">
                        {pokemonNames.map((name, index) => (
                            <option key={index} value={name.pokemon_name}>{name.pokemon_name}</option>
                        ))}
                    </select>
                    </td>
                    <td>
                    <select name="newPokemonTrainerID">
                        {trainerIds.map((trainerIds) => (
                            <option key={trainerIds.trainer_id} value={trainerIds.trainer_id}>{trainerIds.trainer_id}</option>
                        ))}
                    </select>
                    </td>
                    </tr>
                </tbody>
            </table>
            <button type="submit">Add Pokemon to Trainer</button>
            </form>
        </div>
    );
}

export default NewTrainerPage;