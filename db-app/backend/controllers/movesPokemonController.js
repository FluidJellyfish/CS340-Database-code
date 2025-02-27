// Adapted from React Starter Guide https://github.com/osu-cs340-ecampus/react-starter-app

const db = require("../database/config");
require("dotenv").config();
const lodash = require("lodash");

// Returns all rows of people in bsg_people
const getPeople = async (req, res) => {
  try {
    // Select all rows from the "bsg_people" table
    const query = "SELECT * FROM bsg_people";
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching people from the database:", error);
    res.status(500).json({ error: "Error fetching people" });
  }
};

// Create a new entry in Moves-Pokemon

// Read all entries of Moves-Pokemon

// Read the moves of a Pokemon given by its name

// Update a move assigned to a Pokemon given by its name

// Delete an entry in Moves-Pokemon