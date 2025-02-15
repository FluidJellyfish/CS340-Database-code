const TRAINER_IDS = [1, 2, 3, 4, 5];

function NewBattleField({trainer_ids = TRAINER_IDS}) {
    return (
        <div>
            <form className="battle-input">
                <table>
                    <thead>
                        <tr>
                            <th>Trainer 1 ID</th>
                            <th>Trainer 2 ID</th>
                            <th>Winner</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <select name="newBattleTrainer1Id">
                                    {trainer_ids.map((id, index) => (
                                        <option key={index} value={id}>{id}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <select name="newBattleTrainer2Id">
                                    {trainer_ids.map((id, index) => (
                                        <option key={index} value={id}>{id}</option>
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