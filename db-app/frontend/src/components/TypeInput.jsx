
export default function TypeInput({ name }) {

    const pokemonTypes = ["Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dark", "Dragon", "Steel", "Fairy"];
    return (
        <select name={name}>
            {pokemonTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
            ))}
        </select>
    );
}