import TrainerTable from "../components/trainer/TrainerTable";
import PokemonTrainerTable from "../components/trainer/PokemonTrainerTable";

// Sample data

const TRAINERS = [
    {id: 1, items_held: "egg", battle_record: 1},
    {id: 2, items_held: "potion", battle_record: 3},
    {id: 3, items_held: "revive", battle_record: 5}
];

const POKEMONTRAINERS = [
    {trainer_id: 1, pokemon_id: 1, pokemon_name: "Bulbasaur"},
    {trainer_id: 1, pokemon_id: 2, pokemon_name: "Charmander"},
    {trainer_id: 1, pokemon_id: 3, pokemon_name: "Squirtle"},
    {trainer_id: 2, pokemon_id: 4, pokemon_name: "Pikachu"},
    {trainer_id: 2, pokemon_id: 5, pokemon_name: "Jigglypuff"},
    {trainer_id: 3, pokemon_id: 6, pokemon_name: "Meowth"},
    {trainer_id: 3, pokemon_id: 5, pokemon_name: "Jigglypuff"}
];

function TrainerPage() {
    return (
        <div>
        <h1>Trainer Page</h1>
            <TrainerTable trainers={TRAINERS} />
            <PokemonTrainerTable pokemonTrainers={POKEMONTRAINERS}/>
        </div>
    );
}

export default TrainerPage;