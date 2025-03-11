// Adapted from React Starter Guide https://github.com/osu-cs340-ecampus/react-starter-app

const db = require("../database/config");
require("dotenv").config();
const lodash = require("lodash");


/* trainer_1_id int NOT NULL,
    trainer_2_id int NOT NULL,
    result tinyint(1) NOT NULL,*/ 


const createBattle = async(req,res) => {
    const {trainer_1_id, trainer_2_id, result} = req.body;

    try{
        const query = `INSERT INTO Battles(trainer_1_id, 
        trainer_2_id, result) VALUES ('${trainer_1_id}', '${trainer_2_id}', '${result}');`;
        const response = await db.query(query);
        res.status(201).json(response);
    } catch(error){
        console.error("Error adding battle to Battles: ", error);
        res.status(500).json({error: 'Error adding battle to Battles'});
    }
};

const getBattles = async(req, res) => {
    try{
        const query = `SELECT * FROM Battles;`;
        const[rows] = await db.query(query);
        res.status(200).json(rows);
    } catch(error){
        console.error("Error fetching Battles from db: ", error);
        res.status(500).json({error: "Error fetching Battles"});
    }
};

module.exports = {
    createBattle,
    getBattles
};