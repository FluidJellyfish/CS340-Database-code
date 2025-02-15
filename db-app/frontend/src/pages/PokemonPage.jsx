import PokemonTable from '../components/pokemon/PokemonTable';
import MovesPokemonTable from '../components/pokemon/MovesPokemonTable';

// Sample Data

const MOVES = [
  {id: 1, name: "Tackle", type: "Normal", damage: 40},
  {id: 2, name: "Flamethrower", type: "Fire", damage: 90},
  {id: 3, name: "Water Gun", type: "Water", damage: 40},
  {id: 4, name: "Thunderbolt", type: "Electric", damage: 90},
  {id: 5, name: "Vine Whip", type: "Grass", damage: 45},
  {id: 6, name: "Earthquake", type: "Ground", damage: 100}
];

const POKEMON = [
    {id: 1, name: "Bulbasaur", type: "Grass", health: 45},
    {id: 2, name: "Charmander", type: "Fire", health: 39},
    {id: 3, name: "Squirtle", type: "Water", health: 44},
    {id: 4, name: "Pikachu", type: "Electric", health: 35},
    {id: 5, name: "Jigglypuff", type: "Fairy", health: 115},
    {id: 6, name: "Meowth", type: "Normal", health: 40}
];

const MOVESPOKEMON = [
    {pokemon_id: 1, pokemon_name: "Bulbasaur", move_id: 1, move_name: "Tackle"},
    {pokemon_id: 1, pokemon_name: "Bulbasaur", move_id: 5, move_name: "Vine Whip"},
    {pokemon_id: 2, pokemon_name: "Charmander", move_id: 2, move_name: "Flamethrower"},
    {pokemon_id: 2, pokemon_name: "Charmander", move_id: 4, move_name: "Thunderbolt"},
    {pokemon_id: 3, pokemon_name: "Squirtle", move_id: 3, move_name: "Water Gun"}
];

function PokemonPage() {
  return (
    <div>
      <h2>Pokemon</h2>
        <PokemonTable pokemons={POKEMON} />
        <h2>Movesets</h2>
        <MovesPokemonTable movesPokemon={MOVESPOKEMON}/>
    </div>
  );
}

export default PokemonPage;