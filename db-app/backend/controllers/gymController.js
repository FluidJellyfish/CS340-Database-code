// Adapted from React Starter Guide https://github.com/osu-cs340-ecampus/react-starter-app

const db = require("../database/config");
require("dotenv").config();
const lodash = require("lodash");
const getGyms = async (req, res) => {
    try {
        const query = `SELECT Gyms.gym_id, Gyms.gym_leader_id, Trainers.trainer_name FROM Gyms 
        LEFT JOIN Trainers on Trainers.Trainer_id = Gyms.gym_leader_id ORDER BY gym_id ASC;`;
        const [rows] = await db.query(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error fetching gyms from the db: ", error);
        res.status(500).json({ error: "Error fetching gyms" });
    }
};

const addGym = async (req, res) => {
    const { gymLeaderId } = req.body;
    try {
        const query = `INSERT INTO Gyms (Gyms.gym_leader_id) VALUES (${gymLeaderId});`;
        const response = await db.query(query);
        res.status(201).json(response);
    } catch (error) {
        console.error("Error adding Gym", error);
        res.status(500).json({ error: "Error adding Gym" });
    }
};

module.exports = {
    getGyms,
    addGym
};
