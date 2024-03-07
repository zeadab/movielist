const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle adding new movies
app.post('/add-movie', (req, res) => {
    const newMovie = req.body;

    fs.readFile('movies.json', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Internal Server Error');
        }

        const movies = JSON.parse(data);
        movies.push(newMovie);

        fs.writeFile('movies.json', JSON.stringify(movies), (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return res.status(500).send('Internal Server Error');
            }
            console.log('Movie added successfully!');
            res.sendStatus(200);
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
