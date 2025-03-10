import { Link } from "react-router-dom";

function MoveRow({ move }) {
    return (
        <tr>
        <td>{move.move_id}</td>
        <td>{move.move_name}</td>
        <td>{move.move_type}</td>
        <td>{move.move_dmg}</td>
        </tr>
    );
}

function NewMoveButton() {
    return (
        <Link to="/moves/new">
            <button>Add New Move</button>
        </Link>
    );
}

export default function MoveTable({ moves }) {

    return (
        <div>
            <NewMoveButton />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Damage</th>
                    </tr>
                </thead>
                <tbody>
                    {moves.map(move => (
                        <MoveRow key={move.move_id} move={move} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}