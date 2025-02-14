import TypeInput from "../components/TypeInput";

function NewPokemonPage() {
    return (
        <div>
            <h1>Add a New Pokemon</h1>
            <form className="pokemon-input">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Health</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" name="newPokemonName"/></td>
                        <td><TypeInput name={"newPokemonType"}/></td>
                        <td><input type="number" name="newPokemonHealth"/></td>
                    </tr>
                </tbody>
            </table> 
            <button type="submit">Add Pokemon</button>
            </form>
        </div>
    );
}

export default NewPokemonPage;