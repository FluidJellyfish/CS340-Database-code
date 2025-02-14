import { Link } from "react-router-dom";

function PokemonTrainerRow({pokemonTrainer}){
    return (
        <tr>
            <td>{pokemonTrainer.pokemon_id}</td>
            <td>{pokemonTrainer.trainer_id}</td>
            <td><DeletePokemonFromTeamButton /></td>
        </tr>
    );
}

function DeletePokemonFromTeamButton({}) {
    return (
        <button>Delete</button>
    );
}

function NewTrainerButton() {
    return (
        <Link to="/trainers/new">
            <button>Add a Pokemon to a Trainer's Team</button>
        </Link>
    );
}


function TrainerFilterField({ trainerIds }) {
    return (
        <form>
            <select>
                {trainerIds.map(id => (
                    <option key={id} value={id}>{id}</option>
                ))}
            </select>
            <button type="submit">Filter</button>
        </form>

    );
}

export default function PokemonTrainerTable({pokemonTrainers}) {
    return (
        <div>
            <TrainerFilterField trainerIds={pokemonTrainers.map(({ trainer_id }) => trainer_id )}/>
            <NewTrainerButton />
            <table>
                <thead>
                    <tr>
                        <th>Pokemon ID</th>
                        <th>Trainer ID</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemonTrainers.map(pokemonTrainer => (
                        <PokemonTrainerRow pokemonTrainer={pokemonTrainer} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}