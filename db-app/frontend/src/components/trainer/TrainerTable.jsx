import { Link } from "react-router-dom";
import axios from 'axios';

function TrainerRow({ trainer, fetchTrainerData }) {
    return (
        <tr>
        <td>{trainer.trainer_id}</td>
        <td>{trainer.trainer_name}</td>
        <td>{trainer.item_held}</td>
        <td><UpdateItemHeldField id={trainer.trainer_id} fetchTrainerData={fetchTrainerData} /></td>
        <td>{trainer.battle_record}</td>
        <td><UpdateBattleRecordField id={trainer.trainer_id} fetchTrainerData={fetchTrainerData} /></td>
        </tr>
    );
}

function NewTrainerButton() {
    return (
        <Link to="/trainers/new">
            <button>Add New trainer</button>
        </Link>
    );
}

function UpdateBattleRecordField({ id, fetchTrainerData }) {
    async function handleUpdate(formData) {
        try {
            const newBattleRecord = formData.get('newBattleRecord');
            const URL = import.meta.env.VITE_API_URL + 'pokemon/trainers/update/battleRecord';
            const data = {
                trainerId: id,
                newBattleRecord: newBattleRecord
            };
            await axios.put(URL, data);
            alert('Battle Record updated successfully!');
        } catch (error) {
            console.error('Error updating Battle Record: ', error);
            alert('Error updating Battle Record');
        }
    };

    return (
        <form onSubmit={(e) => { 
            e.preventDefault(); 
            const formData = new FormData(e.target);
            handleUpdate(formData);
            fetchTrainerData();
        }}>
            <input name="newBattleRecord" type="number" placeholder="New Battle Record" />
            <button type="submit">Update</button>
        </form>
    );
}

function UpdateItemHeldField({ id, fetchTrainerData }) {
    async function handleUpdate(formData) {
        try {
            const newItemHeld = formData.get('newItemHeld');
            const URL = import.meta.env.VITE_API_URL + 'pokemon/trainers/update/itemsHeld';
            const data = {
                trainerId: id,
                newItemHeld: newItemHeld
            };
            await axios.put(URL, data);
            alert('Items Held updated successfully!');
        } catch (error) {
            console.error('Error updating Items Held: ', error);
            alert('Error updating Items Held');
        }
    };

    return (
        <form onSubmit={(e) => { 
            e.preventDefault(); 
            const formData = new FormData(e.target);
            handleUpdate(formData);
            fetchTrainerData();
        }}>
            <input name="newItemHeld" type="text" placeholder="New Item Held" />
            <button type="submit">Update</button>
        </form>
    );
}

export default function TrainerTable({ trainers, fetchTrainerData }) {

    return (
        <div>
            <NewTrainerButton />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Trainer Name</th>
                        <th>Item Held</th>
                        <th></th>
                        <th>Battle Record</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {trainers.map(trainer => (
                        <TrainerRow key={trainer.trainer_id} trainer={trainer} fetchTrainerData={fetchTrainerData} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}