import { useState, useEffect } from 'react';
import axios from 'axios';

function NewGymField() {
    const [trainer_names, setTrainerNames] = useState(['NULL']);

    const fetchTrainerData = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_API_URL + 'pokemon/trainers/');
            setTrainerNames([{trainer_name:'NULL'}, ...response.data]);
        } catch (error) {
            console.error('Error fetching trainer data:', error);
        };
    }       

    function addGym(formData) {
        try {
            const URL = import.meta.env.VITE_API_URL + 'gyms/create';
            alert('Adding gym with leader Name: ' + formData.get('newGymLeaderName'));
            const data = {
                gymLeaderName: formData.get('newGymLeaderName')
            };
            axios.post(URL, data);

        } catch (error) {
            console.error('Error adding gym:', error);
        }
    }

    useEffect(() => {
        fetchTrainerData();
    }
    , []);

    return (
        <div className="gym-input">
            <table>
                <thead>
                    <tr>
                        <th>Gym Leader Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <form onSubmit={(e) => { 
                            e.preventDefault(); 
                            const formData = new FormData(e.target);
                            addGym(formData);
                        }}>
                            <select name="newGymLeaderName" >
                                {trainer_names.map((name, index) => (
                                    <option key={index} value={name.trainer_name}>{name.trainer_name}</option>
                                ))}
                            </select>
                            <button type="submit">Add Gym</button>
                        </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default NewGymField;