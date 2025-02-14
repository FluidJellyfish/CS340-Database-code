import { Link } from "react-router-dom";

function MoveRow({ move }) {
    return (
        <tr>
        <td>{move.id}</td>
        <td>{move.name}</td>
        <td>{move.type}</td>
        <td>{move.damage}</td>
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
                        <MoveRow key={move.id} move={move} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}