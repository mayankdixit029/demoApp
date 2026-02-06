const express = require('express');
const app = express();
const port = 3000;
const studentRouter = require('./routes/studentRouter');
app.use(express.json());
// Use the student router for all routes starting with /students
app.use('/', studentRouter);


// Middleware to log request details
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});