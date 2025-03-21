import { Link } from "react-router-dom";
function BattleRow({ battle }) {
    return (
        <tr>
        <td>{battle.id}</td>
        <td>{battle.trainer_1_id}</td>
        <td>{battle.t1name}</td>
        <td>{battle.trainer_2_id}</td>
        <td>{battle.t2name}</td>
        <td>{battle.result+1}</td>
        </tr>
    );
}

export default function BattleTable({ battles }) {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Trainer 1 ID</th>
                        <th>Trainer 1 Name</th>
                        <th>Trainer 2 ID</th>
                        <th>Trainer 2 Name</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {battles.map(battle => (
                        <BattleRow key={battle.battle_id} battle={battle} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}