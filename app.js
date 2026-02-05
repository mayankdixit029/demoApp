const express = require('express');
const app = express();
const port = 3000;
const studentRouter = require('./routes/studentRouter');

// Use the student router for all routes starting with /students
app.use('/students', studentRouter);
const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json());
// Middleware to log request details
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});