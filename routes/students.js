const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const StudentsModel = require('./StudentsModel'); // Import your model

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// Student Register CRUD routes
app.post('/students', async (req, res) => {
  // Create a new student
  const newStudent = new StudentsModel(req.body);
  const savedStudent = await newStudent.save();
  res.json(savedStudent);
});

app.get('/students', async (req, res) => {
  // Retrieve a list of students
  const students = await StudentsModel.find();
  res.json(students);
});

// Implement login and JWT token generation here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
