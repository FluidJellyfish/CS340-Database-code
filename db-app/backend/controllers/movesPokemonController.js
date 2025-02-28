// Adapted from React Starter Guide https://github.com/osu-cs340-ecampus/react-starter-app

const db = require("../database/config");
require("dotenv").config();
const lodash = require("lodash");

// (Create) Add a Move to a a Pokemon's moveset given its name
// Returns status of DB action
const addMoveToMoveset = async (req, res) => {
    
    const { pokemonName, moveName } = req.body
    try {
        const query = `INSERT INTO Pokemon_Moves(pokemon_id, move_id) VALUES (
            (SELECT Pokemon.pokemon_id FROM Pokemon WHERE Pokemon.pokemon_name = '${pokemonName}'),
            (SELECT Moves.move_id FROM Moves WHERE Moves.move_name = '${moveName}'));`;

        const response = await db.query(query);

        res.status(201).json(response);
    } catch (error) {
        // Print error on dev side
        console.error("Error adding Move to moveset: ", error);
        // Client side error render
        res.status(500).json({ error: "Error adding Move to moveset" });
    }
};

// Read all entries of Moves-Pokemon
const getPokemonMoves = async(req, res) => {
    try{
        const query = `SELECT * FROM Pokemon_Moves`;
        //executes the query
        const [rows] = await db.query(query)
        //send rows back
        res.status(200).json(rows);
    } catch(error) {
        console.error("Error fetching Pokemon Moves from the db: ", error);
        res.status(500).json({error: "Error fetching Pokemon Moves"});
    }
};

// Read the moves of a Pokemon given by its ID
const getMovesByPokemonID = async (req, res) => {
    try{
        const pokemonMovesID = req.params.id;
        const query = `SELECT * FROM Pokemon_Moves WHERE pokemon_moves_id = '${pokemonMovesID}'`;
        const [result] = await db.query(query);

        if (result.length == 0){
            return res.status(404).json({error: "Pokemon move not found" });
        }
        const move = result[0]
        res.json(move);
    } catch(error){
        console.error("Error fetching move from db: ", error);
        res.status(500).json({error: "Error fetching move"});
    }

};

// Update a move assigned to a Pokemon given by its ID
const updateMoveInMoveset = async (req, res) => {

    //gets pokemon_moves_id
    const pokemonMovesID = req.params.id;
    //gets Pokemon_Moves
    const newMove = req.body

    try {
        const [data] = await db.query(`SELECT * FROM Pokemon_Moves WHERE pokemon_moves_id = '${pokemonMovesID}'`);

        const oldMove = data[0];

        //if oldData and newData differ perform updates
        if(!lodash.isEqual(newMove, oldMove)){
            const query = `UPDATE Pokemon_Moves SET pokemon_id = ${newMove.pokemon_id}, move_id = ${newMove.move_id} WHERE pokemon_moves_id = ${pokemonMovesID}`;
        

        const values = [
            newMove.pokemon_id,
            newMove.move_id,
            pokemonMovesID,

        ];

        //update
        await db.query(query, values);

        return res.json({message: "Pokemon move has been updated." });
    }

        res.json({message: "Move details are the same, no update" });
        
    } catch (error){
        //server side
        console.error("Error updating move set: ", error);

        //client side error
        res.status(500).json({error: "Error updating moveset."})
    }


};

// Delete an entry in Moves-Pokemon
const deleteMove = async (req, res) => {
    console.log("Deleting Pokemon Move with ID: ", req.params.id);
    const pokemonMovesID = req.params.id;

    try{
        //checks if move exists
        const [isExisting] = await db.query(
            `SELECT 1 FROM Pokemon_Moves WHERE pokemon_moves_id = ${pokemonMovesID}`);

        //if the move doesn't exist, return an error.
        if(isExisting.length == 0) {
            return res.status(404).send("Move not found");
        }

        //delete the move
        const [response] = await db.query(
            `DELETE FROM Pokemon_Moves WHERE pokemon_moves_id = ${pokemonMovesID}`);

        console.log("Deleted", response.affectedRows, "rows from Pokemon_Moves intersection table");

        res.status(204).json({message: "Move deleted successfully" });
    } catch (error){
        console.error("Error deleting move from database: ", error);
        res.status(500).json({error: error.message});
    }
};

module.exports = {
    addMoveToMoveset,
    getPokemonMoves,
    getMovesByPokemonID,
    updateMoveInMoveset,
    deleteMove,
};