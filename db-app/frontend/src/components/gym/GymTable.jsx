function GymRow({ gym }) {
    let n_trainer_name = 'NULL';
    if(gym.gym_leader_id === null) {
        gym.gym_leader_id = 'NULL';
        n_trainer_name = 'NULL';
    }else{
        n_trainer_name = gym.trainer_name;
    }
    return (
        <tr>
        <td>{gym.gym_id}</td>  
        <td>{gym.gym_leader_id}</td>
        <td>{n_trainer_name}</td>
        </tr>
    );
}

function GymLeaderTeamTable({ team }) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Pokemon ID</th>
                        <th>Pokemon Name</th>
                    </tr>
                </thead>
                <tbody>
                    {team.map(pokemon => (
                        <tr key={pokemon.pokemon_id}>
                            <td>{pokemon.pokemon_id}</td>
                            <td>{pokemon.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function GymTable({ gyms }) {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Gym Leader ID</th>
                        <th>Gym Leader Name</th>
                    </tr>
                </thead>
                <tbody>
                    {gyms.map(gym => (
                        <GymRow key={gym.gym_id} gym={gym} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}