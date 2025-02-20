import GymTable from "../components/gym/GymTable";
import NewGymField from "../components/gym/NewGymField";

const GYMS = [
    {id: 1, gym_leader_id: 2},
    {id: 2, gym_leader_id: 3},
    {id: 3, gym_leader_id: "NULL"}
];

export default function GymPage() {
    
    return (
        <div>
            <h2>Gyms</h2>
            <GymTable gyms={GYMS}/>
            <h2>Add a New Gym</h2>
            <NewGymField />
        </div>
    );
}