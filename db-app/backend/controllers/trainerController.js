// Adapted from React Starter Guide https://github.com/osu-cs340-ecampus/react-starter-app

const db = require("../database/config");
require("dotenv").config();
const lodash = require("lodash");

// (Create) Add a Move to a a Pokemon's moveset given its name
// Returns status of DB action

const createTrainer = async (req, res) => {
    
    const { items_held, battle_record } = req.body;
    //console.log('Data recieved:', req.body);
    try{
        const query = `INSERT INTO Trainers(items_held, battle_record) VALUES ('${items_held}', '${battle_record}');`;
        const response = await db.query(query);
        res.status(201).json(response);
    } catch (error){
        console.error("Error adding trainer to Trainers: ", error);
        res.status(500).json({error: "Error adding trainer to Trainers"});
    }
};

const getTrainers = async(req, res) => {
    try{
        const query = "SELECT * FROM Trainers;";
        const[rows] = await db.query(query);
        res.status(200).json(rows);
    } catch(error){
        console.error("Error fetching Trainers from db: ", error);
        res.status(500).json({error: "Error fetching Trainers"});
    }
};

const updateHeldItem = async (req, res) => {

    const {trainerId, newItemHeld} = req.body;

    try {
        const id_query = await db.query(`UPDATE Trainers SET items_held = '${newItemHeld}' WHERE trainer_id = ${trainerId}`);
        
    } catch (error){
        //server side
        console.error("Error updating move set: ", error);

        //client side error
        res.status(500).json({error: "Error updating moveset."})
    }


};

const updateBattleRecord = async (req, res) => {

    const {trainerId, newBattleRecord} = req.body;

    try {
        await db.query(`UPDATE Trainers SET battle_record = '${newBattleRecord}' WHERE trainer_id = ${trainerId}`);
        
    } catch (error){
        //server side
        console.error("Error updating move set: ", error);

        //client side error
        res.status(500).json({error: "Error updating moveset."})
    }
};

module.exports = {
    createTrainer,
    getTrainers,
    updateHeldItem,
    updateBattleRecord
};