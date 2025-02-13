import { Link } from "react-router-dom";

function PokemonRow({ pokemon }) {
    return (
        <tr>
        <td>{pokemon.id}</td>
        <td>{pokemon.name}</td>
        <td>{pokemon.type}</td>
        <td>{pokemon.health}</td>
        </tr>
    );
}

function NewPokemonButton() {
    return (
        <Link to="/pokemon/new">
            <button>Add New Pokemon</button>
        </Link>
    );
}

export default function PokemonTable({ pokemons }) {

    return (
        <div>
            <NewPokemonButton />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Health</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemons.map(pokemon => (
                        <PokemonRow key={pokemon.id} pokemon={pokemon} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}