import TrainerTable from "../components/trainer/TrainerTable";
import PokemonTrainerTable from "../components/trainer/PokemonTrainerTable";

const TRAINERS = [
    {id: 1, items_held: "egg", battle_record: 1},
    {id: 2, items_held: "potion", battle_record: 3},
    {id: 3, items_held: "revive", battle_record: 5}
];

const POKEMONTRAINERS = [
    {pokemon_id: 1, trainer_id: 1},
    {pokemon_id: 1, trainer_id: 2},
    {pokemon_id: 1, trainer_id: 3}
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