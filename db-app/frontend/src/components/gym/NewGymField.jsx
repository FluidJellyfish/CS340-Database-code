const TRAINER_IDS = ["NULL", 1, 2, 3, 4, 5];

function NewGymField({trainer_ids = TRAINER_IDS}) {
    return (
        <div>
            <form className="gym-input">
                <table>
                    <thead>
                        <tr>
                            <th>Gym Leader ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <select name="newGymLeaderId">
                                    {trainer_ids.map((id, index) => (
                                        <option key={index} value={id}>{id}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">Add Gym</button>
            </form>
        </div>
    );
}

export default NewGymField;