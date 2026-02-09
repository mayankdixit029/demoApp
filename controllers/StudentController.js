const Student = require('../models/students');

const getStudents = (req, res) => {
  Student.fetchAll().then((students) => {
    res.json(students);
  });
};

const postAddStudent = (req, res) => {
  console.log("Request body:", req.body);
  const { name, classes, roll_number, dob } = req.body;
  const newStudent = new Student(name, classes, roll_number, dob);
  // Save the new student to the database
  newStudent.save().then(() => {
    res.status(201).json({ message: 'Student added successfully' });
  }).catch((err) => {
    console.log("Error adding student:", err);
    res.status(500).json({ error: 'Failed to add student' });
  });
};

const getEditStudent = (req, res) => {
  console.log("Student ID from params:", req.params.studentId);
  const studentId = req.params.studentId;
  Student.findById(studentId).then((student) => {
    res.json(student);
  });
};

module.exports = {
  getStudents,
  postAddStudent,
  getEditStudent,
};