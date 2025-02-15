import { Link } from "react-router-dom";

function PokemonTrainerRow({pokemonTrainer}){
    return (
        <tr>
            <td>{pokemonTrainer.trainer_id}</td>
            <td>{pokemonTrainer.pokemon_id}</td>
            <td>{pokemonTrainer.pokemon_name}</td>
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
    const uniqueTrainerIds = [...new Set(pokemonTrainers.map(item => item.trainer_id))];

    return (
        <div>
            <TrainerFilterField trainerIds={uniqueTrainerIds}/>
            <NewTrainerButton />
            <table>
                <thead>
                    <tr>
                        <th>Trainer ID</th>
                        <th>Pokemon ID</th>
                        <th>Pokemon Name</th>
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