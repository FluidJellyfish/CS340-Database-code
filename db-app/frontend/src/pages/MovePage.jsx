import MoveTable from '../components/move/MoveTable';

const MOVES = [
    {id: 1, name: "Tackle", type: "Normal", damage: 40},
    {id: 2, name: "Flamethrower", type: "Fire", damage: 90},
    {id: 3, name: "Water Gun", type: "Water", damage: 40},
    {id: 4, name: "Thunderbolt", type: "Electric", damage: 90},
    {id: 5, name: "Vine Whip", type: "Grass", damage: 45},
    {id: 6, name: "Earthquake", type: "Ground", damage: 100}
];

function MovePage() {
  return (
    <div>
      <h1>Move Page</h1>
        <MoveTable moves={MOVES} />
    </div>
  );
}

export default MovePage;