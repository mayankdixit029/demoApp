const express = require('express');
const studentRouter = express.Router();

const studentController = require('../controllers/StudentController');
// studentRouter.get("/add-student", studentController.getAddStudent);
studentRouter.post("/add-student", studentController.postAddStudent);
studentRouter.get("/students", studentController.getStudents);
// studentRouter.get("/edit-student/:studentId", studentController.getEditStudent);
// studentRouter.post("/edit-student/:studentId", hostController.postEditHome);
module.exports = studentRouter;