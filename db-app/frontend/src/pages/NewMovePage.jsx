import TypeInput from "../components/TypeInput";

function NewMovePage() {
    return (
        <div>
            <h1>Add a New Move</h1>
            <form className="move-input">
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
                        <td><input type="number" name="newMoveHealth"/></td>
                    </tr>
                </tbody>
            </table> 
            <button type="submit">Add Move</button>
            </form>
        </div>
    );
}

export default NewMovePage;