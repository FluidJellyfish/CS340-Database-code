import { useState, useEffect } from 'react';  
import axios from 'axios';



function NewBattleField() {
    
    const [trainerNames, setTrainerNames] = useState([]);

    //pulled from trainerPage
    const fetchTrainerData = async() => {
        console.log("Fetching trainer data");
        try {
            const url = import.meta.env.VITE_API_URL + 'pokemon/trainers'
            console.log("Fetching data from:", url);
            const response = await axios.get(url);
            setTrainerNames(response.data);
            console.log("response data:", response.data);
            //alert(JSON.stringify(response.data));

        } catch (error) {
            console.error('Error fetching trainer data:', error);
            if(error.response){
                console.error('Error response:', error.response);
            } else if(error.request){
                console.error('Error request:', error.request);
            }
            else{
                console.error('Error Message:', error.message);
            }
        };
    };


    useEffect(() => {
        fetchTrainerData();
    }, []);


    function addBattle(formData){
        try {
            const url = import.meta.env.VITE_API_URL + "battles/create"
            const data = {
                trainer_1_name: formData.get('newBattleTrainer1Name'),
                trainer_2_name: formData.get('newBattleTrainer2Name'),
                winner: formData.get('Winner')
            };
            if(data.trainer_1_name === data.trainer_2_name){
                alert('Trainer 1 and Trainer 2 cannot be the same');
                return;
            }
            axios.post(url,data)
        } catch (error){
            console.error('Error adding battle: ', error);
            alert('Error adding battle')
        }


    };

    const handleBattleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        addBattle(formData);
        console.log("Battle submitted: ", formData);
    }



    return (
        <div>
            <form className="battle-input" onSubmit={handleBattleSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Trainer 1</th>
                            <th>Trainer 2</th>
                            <th>Winner</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <select name="newBattleTrainer1Name">
                                    {trainerNames.map((trainerNames) => (
                                        <option key={trainerNames.trainer_name} value={trainerNames.trainer_name}>{trainerNames.trainer_name}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <select name="newBattleTrainer2Name">
                                    {trainerNames.map((trainerNames) => (
                                        <option key={trainerNames.trainer_name} value={trainerNames.trainer_name}>{trainerNames.trainer_name}</option>
                                    ))}
                                </select>
                            </td>
                            <td><input type="number" name="Winner" /></td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">Add Battle</button>
            </form>
        </div>
    );
}

export default NewBattleField;