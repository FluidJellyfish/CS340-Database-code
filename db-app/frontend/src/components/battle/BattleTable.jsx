function BattleRow({ battle }) {
    return (
        <tr>
        <td>{battle.id}</td>
        <td>{battle.trainer_1_id}</td>
        <td>{battle.trainer_2_id}</td>
        <td>{battle.result}</td>
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
                        <th>Trainer 2 ID</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {battles.map(battle => (
                        <BattleRow key={battle.id} battle={battle} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}