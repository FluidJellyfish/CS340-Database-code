const POKEMONNAMES = [
    "Pikachu",
    "Charmander",
    "Bulbasaur",
    "Squirtle",
    "Jigglypuff"
];

const TRAINERIDS = [
    1,
    2,
    3,
    4,
    5
];

function NewTrainerPage({pokemonNames=POKEMONNAMES, trainerIds=TRAINERIDS}) {
    return (
        <div>
            <h2>Add a New Trainer</h2>
            <form className="trainer-input">
            <table>
                <thead>
                    <tr>
                        <th>Held Items</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" name="newTrainerHeldItems"/></td>
                    </tr>
                </tbody>
            </table> 
            <button type="submit">Add Trainer</button>
            </form>
            <h2>Add a Pokemon to a Trainer's Team</h2>
            <form className="trainer-team-edit">
            <table>
                <thead>
                    <tr>
                        <th>Pokemon ID</th>
                        <th>Trainer ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>
                    <select name="newPokemonName">
                        {pokemonNames.map((name, index) => (
                            <option key={index} value={name}>{name}</option>
                        ))}
                    </select>
                    </td>
                    <td>
                    <select name="newPokemonTrainerID">
                        {trainerIds.map((id, index) => (
                            <option key={index} value={id}>{id}</option>
                        ))}
                    </select>
                    </td>
                    </tr>
                </tbody>
            </table>
            <button type="submit">Add Pokemon to Trainer</button>
            </form>
        </div>
    );
}

export default NewTrainerPage;