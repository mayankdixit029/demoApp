const student = require('../models/students');

const getStudents = (req, res) => {
  student.fetchAll().then((students) => {
    res.json(students);
  });
};

module.exports = {
  getStudents,
};