// Adapted from React Starter Guide https://github.com/osu-cs340-ecampus/react-starter-app

const db = require("../database/config");
require("dotenv").config();
const lodash = require("lodash");


const addPokemonToTrainer = async (req, res) => {

    const { trainerID, pokemonName } = req.body
    try {
        const query = `INSERT INTO Pokemon_Trainers(trainer_id, pokemon_id) VALUES (
            ${trainerID},
            (SELECT Pokemon.pokemon_id FROM Pokemon WHERE Pokemon.pokemon_name = '${pokemonName}'));`;

        const response = await db.query(query);

        res.status(201).json(response);
    } catch (error) {
        // Print error on dev side
        console.error("Error adding Pokemon to Trainer: ", error);
        // Client side error render
        res.status(500).json({ error: "Error adding Pokemon to Trainer" });
    }
};

const getPokemonTrainers = async(req, res) => {
    try{
        const query = ` SELECT Pokemon_Trainers.pokemon_trainer_id, Pokemon_Trainers.trainer_id, Pokemon_Trainers.pokemon_id, Pokemon.pokemon_name FROM Pokemon_Trainers
                        INNER JOIN Pokemon ON Pokemon_Trainers.pokemon_id = Pokemon.pokemon_id
                        ORDER BY trainer_id ASC;`;
        const[rows] = await db.query(query);
        res.status(200).json(rows);
    } catch(error){
        console.error("Error fetching PokemonTrainers from db: ", error);
        res.status(500).json({error: "Error fetching PokemonTrainers"});
    }
}

const getPokemonTrainerByID = async (req, res) => {
    try{
        const trainerID = req.params.trainerID;
        const query = `SELECT Pokemon_Trainers.pokemon_trainer_id, Pokemon_Trainers.trainer_id, Pokemon_Trainers.pokemon_id, Pokemon.pokemon_name FROM Pokemon_Trainers
        INNER JOIN Pokemon ON Pokemon_Trainers.pokemon_id = Pokemon.pokemon_id AND Pokemon_Trainers.trainer_id = ${trainerID}
        ORDER BY pokemon_id ASC;`;
        const [result] = await db.query(query);

        if (result.length == 0){
            return res.status(404).json({error: "Pokemon not found" });
        }
        res.json(result);
    } catch(error){
        console.error("Error fetching Pokemon from db: ", error);
        res.status(500).json({error: "Error fetching Pokemon"});
    }
}
const deletePokemonTrainer = async (req, res) => {
    const pokemonTrainerID = req.params.id;

    try {

        // Delete the Pokemon Trainer
        const [response] = await db.query(
            `DELETE FROM Pokemon_Trainers WHERE pokemon_trainer_id = ${pokemonTrainerID};`
        );

        console.log("Deleted", response.affectedRows, "rows from Pokemon_Trainers table");

        res.status(204).json({ message: "Pokemon Trainer deleted successfully" });
    } catch (error) {
        console.error("Error deleting Pokemon Trainer from database: ", error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getPokemonTrainers,
    addPokemonToTrainer,
    getPokemonTrainerByID,
    deletePokemonTrainer,
};
