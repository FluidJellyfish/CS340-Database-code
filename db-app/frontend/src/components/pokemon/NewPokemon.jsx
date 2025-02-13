import TypeInput from "../TypeInput";

export default function NewPokemon() {

    return (
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
    )
}