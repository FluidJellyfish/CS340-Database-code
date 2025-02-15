import NewBattleField from "../components/battle/NewBattleField"; 
import BattleTable from "../components/battle/BattleTable";

const BATTLES = [
    {id: 1, trainer_1_id: 1, trainer_2_id: 2, result: 1},
    {id: 2, trainer_1_id: 3, trainer_2_id: 4, result: 2},
    {id: 3, trainer_1_id: 5, trainer_2_id: 1, result: 1},
    {id: 4, trainer_1_id: 2, trainer_2_id: 3, result: 2}
];

function BattlePage() {
    return (
        <div>
            <h2>Battles</h2>
            <BattleTable battles={BATTLES}/>
            <h2>Add a New Battle</h2>
            <NewBattleField />
        </div>
    );
}

export default BattlePage;