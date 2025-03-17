import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import TypeInput from "../components/TypeInput";

function NewMovePage() {
    function addMove(formData) {
        try { 
            const URL = import.meta.env.VITE_API_URL + 'moves/create';
            const data = {
                moveName: formData.get('newMoveName'),
                moveType: formData.get('newMoveType'),
                moveDmg: formData.get('newMoveDmg')
            };
            axios.post(URL, data);
            alert(`Move ${data.moveName} added successfully!`);
        } catch {
            console.error('Error adding Move: ', error);
            alert('Error adding Move');
        }
    };
    let navigate = useNavigate(); 
    const navigateToParent = () =>{ 
        navigate('/moves');
    };

    const handleAddMoveSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        addMove(formData);   
        navigateToParent();
    };

    return (
        <div>
            <h1>Add a New Move</h1>
            <form className="move-input" onSubmit={handleAddMoveSubmit}>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Damage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" name="newMoveName"/></td>
                        <td><TypeInput name={"newMoveType"}/></td>
                        <td><input type="number" name="newMoveDmg"/></td>
                    </tr>
                </tbody>
            </table> 
            <button type="submit">Add Move</button>
            </form>
        </div>
    );
}

export default NewMovePage;