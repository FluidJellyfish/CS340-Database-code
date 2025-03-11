function GymRow({ gym }) {
    return (
        <tr>
        <td>{gym.gym_id}</td>
        <td>{gym.gym_leader_id}</td>
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