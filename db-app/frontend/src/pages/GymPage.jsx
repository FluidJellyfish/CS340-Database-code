import GymTable from "../components/gym/GymTable";
import NewGymField from "../components/gym/NewGymField";
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function GymPage() {
    const [gyms, setGyms] = useState([]);

    const fetchGyms = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_API_URL + 'gyms/');
            setGyms(response.data);
        } catch (error) {
            console.error('Error fetching gyms:', error);
        };
    }

    useEffect(() => {
        fetchGyms();
    }, []);

    
    return (
        <div>
            <h2>Gyms</h2>
            <GymTable gyms={gyms}/>
            <h2>Add a New Gym</h2>
            <NewGymField />
        </div>
    );
}