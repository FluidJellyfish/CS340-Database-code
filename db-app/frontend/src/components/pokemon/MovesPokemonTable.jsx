import { Link } from "react-router-dom";

function MovesPokemonRow({movePokemon}){
    return (
        <tr>
            <td>{movePokemon.pokemon_id}</td>
            <td>{movePokemon.pokemon_name}</td>
            <td>{movePokemon.move_id}</td>
            <td>{movePokemon.move_name}</td>
            <td><DeleteMoveButton /></td>
        </tr>
    );
}

function DeleteMoveButton({}) {
    return (
        <button>Delete</button>
    );
}

function NewTrainerButton() {
    return (
        <Link to="/pokemon/new">
            <button>Add a Move to a Pokemon's Moveset</button>
        </Link>
    );
}

function PokemonFilterField({ pokemonNames }) {
    return (
        <form>
            <select>
                {pokemonNames.map(name => (
                    <option key={name} value={name}>{name}</option>
                ))}
            </select>
            <button type="submit">Filter</button>
        </form>
    );
}

export default function MovesPokemonTable({ movesPokemon }) {
    // Extract unique pokemon names
    const uniquePokemonNames = [...new Set(movesPokemon.map(item => item.pokemon_name))];

    return (
        <div>
            <PokemonFilterField pokemonNames={uniquePokemonNames} />
            <NewTrainerButton />
            <table>
                <thead>
                    <tr>
                        <th>Pokemon ID</th>
                        <th>Pokemon Name</th>
                        <th>Move ID</th>
                        <th>Move Name</th>
                    </tr>
                </thead>
                <tbody>
                    {movesPokemon.map(movePokemon => (
                        <MovesPokemonRow key={movePokemon.move_id} movePokemon={movePokemon} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}