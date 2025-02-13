import PokemonTable from '../components/pokemon/PokemonTable';

const POKEMON = [
    {id: 1, name: "Bulbasaur", type: "Grass/Poison", health: 45},
    {id: 2, name: "Charmander", type: "Fire", health: 39},
    {id: 3, name: "Squirtle", type: "Water", health: 44},
    {id: 4, name: "Pikachu", type: "Electric", health: 35},
    {id: 5, name: "Jigglypuff", type: "Normal/Fairy", health: 115},
    {id: 6, name: "Meowth", type: "Normal", health: 40}
];

function PokemonPage() {
  return (
    <div>
      <h1>Pokemon Page</h1>
        <PokemonTable pokemons={POKEMON} />
    </div>
  );
}

export default PokemonPage;