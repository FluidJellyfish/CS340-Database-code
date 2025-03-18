import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function NewTrainerPage() {

    const [trainerNames, setTrainerNames] = useState([]);
    const [pokemonNames, setPokemonNames] = useState([]);


    const fetchTrainerData = async() => {
        try {
            const response = await axios.get(import.meta.env.VITE_API_URL + 'pokemon/trainers/');
            setTrainerNames(response.data);
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
                trainer_name: formData.get('newTrainerName'),
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
                trainerName: formData.get('newPokemonTrainerName'),
                pokemonName: formData.get('newPokemonName')
            };
            axios.post(URL, data);
            alert('Pokemon added to Trainer\'s team successfully!');
        } catch {
            console.error('Error adding Pokemon to Trainer\'s team: ', error);
            alert('Error adding Pokemon to Trainer\'s team');
        }
    };

    let navigate = useNavigate(); 
    const navigateToParent = () =>{ 
        navigate('/trainers');
    };

    const handleAddTrainerSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        addTrainer(formData);
        navigateToParent();
    };

    const handleAddPokemonToTrainerSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        addPokemonToTrainer(formData);
        navigateToParent();
    };


    return (
        <div>
            <h2>Add a New Trainer</h2>
            <form className="trainer-input" onSubmit = {handleAddTrainerSubmit}>
            <table>
                <thead>
                    <tr>
                        <th>Trainer Name</th>
                        <th>Held Items</th>
                        <th>Battle Record</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" name="newTrainerName"/></td>
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
                        <th>Trainer Name</th>
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
                    <select name="newPokemonTrainerName">
                        {trainerNames.map((trainerNames) => (
                            <option key={trainerNames.trainer_name} value={trainerNames.trainer_name}>{trainerNames.trainer_name}</option>
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