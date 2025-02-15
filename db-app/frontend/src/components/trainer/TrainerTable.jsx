import { Link } from "react-router-dom";

function TrainerRow({ trainer }) {
    return (
        <tr>
        <td>{trainer.id}</td>
        <td>{trainer.items_held}</td>
        <td><UpdateItemHeldField /></td>
        <td>{trainer.battle_record}</td>
        <td><UpdateBattleRecordField /></td>
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

function UpdateBattleRecordField() {
    return (
        <form>
            <input type="number" placeholder="New Battle Record" />
            <button type="submit">Update</button>
        </form>
    );
}

function UpdateItemHeldField() {
    return (
        <form>
            <input type="text" placeholder="New Item Held" />
            <button type="submit">Update</button>
        </form>
    );
}

export default function TrainerTable({ trainers }) {

    return (
        <div>
            <NewTrainerButton />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Item Held</th>
                        <th></th>
                        <th>Battle Record</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {trainers.map(trainer => (
                        <TrainerRow key={trainer.id} trainer={trainer} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}