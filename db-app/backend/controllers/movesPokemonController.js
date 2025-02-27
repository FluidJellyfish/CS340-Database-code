// Adapted from React Starter Guide https://github.com/osu-cs340-ecampus/react-starter-app

const db = require("../database/config");
require("dotenv").config();
const lodash = require("lodash");

// (Create) Add a Move to a a Pokemon's moveset given its name
// Returns status of DB action
const addMoveToMoveset = async (req, res) => {
    
    const { pokemonName, moveName } = req.body
    try {
        const [rows] = await db.query(query);
        const query = `INSERT INTO Pokemon_Moves(pokemon_id, move_id) VALUES (
            (SELECT Pokemon.pokemon_id FROM Pokemon WHERE Pokemon.pokemon_name = ?),
            (SELECT Moves.move_id FROM Moves WHERE Moves.move_name = ?));`;

        const response = await db.query(query, [
            pokemonName,
            moveName
        ]);

        res.status(201).json(response);
    } catch (error) {
        // Print error on dev side
        console.error("Error creating person:", error);
        // Client side error render
        res.status(500).json({ error: "Error creating person" });
    }
};

// Read all entries of Moves-Pokemon

// Read the moves of a Pokemon given by its name

// Update a move assigned to a Pokemon given by its name

// Delete an entry in Moves-Pokemon

module.exports = {
    addMoveToMoveset
};