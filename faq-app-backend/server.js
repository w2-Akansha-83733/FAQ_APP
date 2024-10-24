

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'manager', 
    database: 'faq_app'
});


db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('MySQL connected');
});

 


// Create FAQ
app.post('/faqs', (req, res) => {
    const { question, answer, parent_id } = req.body;
    db.query('INSERT INTO faqs (question, answer, parent_id) VALUES (?, ?, ?)', [question, answer, parent_id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ id: results.insertId, question, answer, parent_id });
    });
});

// Read FAQs
app.get('/faqs', (req, res) => {
    db.query('SELECT * FROM faqs', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// Update FAQ
app.put('/faqs/:id', (req, res) => {
    const { id } = req.params;
    const { question, answer, parent_id } = req.body;
    db.query('UPDATE faqs SET question = ?, answer = ?, parent_id = ? WHERE id = ?', [question, answer, parent_id, id], (err) => {
        if (err) return res.status(500).send(err);
        res.json({ id, question, answer, parent_id });
    });
});

// Delete FAQ
app.delete('/faqs/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM faqs WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).send(err);
        res.status(204).send();
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
