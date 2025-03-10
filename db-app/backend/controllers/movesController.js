// Adapted from React Starter Guide https://github.com/osu-cs340-ecampus/react-starter-app

const db = require("../database/config");
require("dotenv").config();
const lodash = require("lodash");


const getMoves = async (req, res) => {
    try{
        const query = `SELECT Moves.move_id, Moves.move_type, Moves.move_dmg, Moves.move_name FROM Moves
        ORDER BY move_id ASC;`;
        const [rows] = await db.query(query)
        res.status(200).json(rows);
    } catch(error) {
        console.error("Error fetching moves from the db: ", error);
        res.status(500).json({error: "Error fetching moves"});
    }
};

const addMove = async (req, res) => {
    
    const { moveName, moveType, moveDmg } = req.body;
    try {
        const query = `INSERT INTO Moves (Moves.move_name, Moves.move_type, Moves.move_dmg) VALUES ('${moveName}', '${moveType}', '${moveDmg}');`;
        const response = await db.query(query);
        res.status(201).json(response);
    } catch (error) {
        // Print error on dev side
        console.error("Error adding Moves", error);
        // Client side error render
        res.status(500).json({ error: "Error adding Moves" });
    }
};

module.exports = {
    getMoves,
    addMove
};