 
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/yourdb', { useNewUrlParser: true, useUnifiedTopology: true });

// Add routes and middleware
app.use('/students', require('./routes/students'));
// Add routes for WorksModel and other routes

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
