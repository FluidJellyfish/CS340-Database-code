import { useState, useEffect } from 'react';
import axios from 'axios';

function NewGymField() {
    const [trainer_ids, setTrainerIds] = useState([]);

    const fetchTrainerData = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_API_URL + 'pokemon/trainers/');
            setTrainerIds(response.data);
        } catch (error) {
            console.error('Error fetching trainer data:', error);
        };
    }       

    function addGym(formData) {
        try {
            const URL = import.meta.env.VITE_API_URL + 'gyms/create';
            alert('Adding gym with leader ID: ' + formData.get('newGymLeaderId'));
            const data = {
                gymLeaderId: formData.get('newGymLeaderId')
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
                        <th>Gym Leader ID</th>
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
                            <select name="newGymLeaderId" >
                                {trainer_ids.map((id, index) => (
                                    <option key={index} value={id.trainer_id}>{id.trainer_id}</option>
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