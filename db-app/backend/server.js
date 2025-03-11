// Adapted from React Starter Guide https://github.com/osu-cs340-ecampus/react-starter-app

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.DB_PORT;

// Middleware:

// If on FLIP, use cors() middleware to allow cross-origin requests from the frontend with your port number:
// EX (local): http://localhost:5173 
// EX (FLIP/classwork) http://flip3.engr.oregonstate.edu:5173
app.use(cors({ credentials: true, origin: "*" }));
app.use(express.json());

// API Routes for backend CRUD:
//app.use("/api/people", require("./routes/peopleRoutes"));

app.use("/api/pokemon", require("./routes/pokemonRoutes.js"));
app.use("/api/pokemon/moves", require("./routes/movesPokemonRoutes"));
app.use("/api/pokemon/trainers", require("./routes/trainerRoutes"));
app.use("/api/moves", require("./routes/movesRoutes"));
app.use("/api/battles", require("./routes/battleRoutes"));

// Add your Connect DB Activitiy Code Below:
const db = require('./database/config.js');

// define a new GET request with express:
app.get('/api/diagnostic', async (req, res) => {
  try {
    // Await your database queries here
    await db.query('DROP TABLE IF EXISTS diagnostic;');
    await db.query('CREATE TABLE diagnostic(id INT PRIMARY KEY AUTO_INCREMENT, text VARCHAR(255) NOT NULL);');
    await db.query('INSERT INTO diagnostic (text) VALUES ("MySQL is working!")');
    const results = await db.query('SELECT * FROM diagnostic;');

    // res.json() automatically stringifies the JavaScript object to JSON
    res.json(results);

  } catch (error) {
    // Handle Errors
    console.error('Database operation failed:', error);
    res.status(500).send('Server error');
  }
});


// ...
// End Connect DB Activity Code.


const os = require("os");
const hostname = os.hostname();

app.listen(PORT, () => {
  // flip server should automatically match whatever server you're on 
  console.log(`Server running:  http://${hostname}:${PORT}...`);
});
