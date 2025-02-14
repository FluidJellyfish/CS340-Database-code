function NewTrainerPage() {
    return (
        <div>
            <h1>Add a New Trainer</h1>
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
            <h1>Add a Pokemon to a Trainer's Team</h1>
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
                        <td><input type="text" name="newPokemonId"/></td>
                        <td><input type="text" name="newTrainerId"/></td>
                    </tr>
                </tbody>
            </table>
            <button type="submit">Add Pokemon to Trainer</button>
            </form>
        </div>
    );
}

export default NewTrainerPage;