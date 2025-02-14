import TypeInput from "../components/TypeInput";


const POKEMONNAMES = [
    "Pikachu",
    "Charmander",
    "Bulbasaur",
    "Squirtle",
    "Jigglypuff"
];

const MOVENAMES = [
    "Thunderbolt",
    "Flamethrower",
    "Vine Whip",
    "Water Gun",
    "Sing"
];

function NewPokemonPage({pokemonNames=POKEMONNAMES, moveNames=MOVENAMES}) {
    return (
        <div>
            <h2>Add a New Pokemon</h2>
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
            <h2>Add a Move to a Pokemon's Moveset</h2>
            <form className="pokemon-moveset-edit">
            <table>
                <thead>
                    <tr>
                        <th>Pokemon Name</th>
                        <th>Move Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <select name="newMovePokemonName">
                            {pokemonNames.map((name, index) => (
                                <option key={index} value={name}>{name}</option>
                            ))}
                        </select>
                        </td>
                        <td>
                        <select name="newMoveName">
                            {moveNames.map((name, index) => (
                                <option key={index} value={name}>{name}</option>
                            ))}
                        </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button type="submit">Add Move to Pokemon</button>
            </form>
        </div>
    );
}

export default NewPokemonPage;