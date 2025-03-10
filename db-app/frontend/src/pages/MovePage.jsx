import { useEffect, useState } from 'react';
import axios from 'axios';

import MoveTable from '../components/move/MoveTable';

function MovePage() {
    const [moveData, setMoveData] = useState([]);
    const fetchMoveData = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_API_URL + 'moves/');
            setMoveData(response.data);
            alert(jsonify(response.data));
        } catch (error) {
            console.error('Error fetching move data:', error);
        };
    };
    
    useEffect(() => {
        fetchMoveData();
    }, []);

    return (
        <div>
          <h1>Move Page</h1>
          <MoveTable moves={moveData} />
        </div>
    );
}

export default MovePage;