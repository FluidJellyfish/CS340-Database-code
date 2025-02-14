import { Link } from "react-router-dom";

function TrainerRow({ trainer }) {
    return (
        <tr>
        <td>{trainer.id}</td>
        <td>{trainer.items_held}</td>
        <td>{trainer.battle_record}</td>
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

export default function TrainerTable({ trainers }) {

    return (
        <div>
            <NewTrainerButton />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Items Held</th>
                        <th>Battle Record</th>
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