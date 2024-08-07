const studentService = require('../services/student-service');
const StudentAddDto = require('../models/studentAddDto');

const getAllStudents = async (req, res) => {
    const data = await studentService.getAllStudent();
    // res.send(JSON.stringify(data, null, 2));
    res.json(data);
};

const getStudentById = async (req, res) => {
    const data = await studentService.getStudentById(req.params.id);
    res.json(data);
};

const getStudentByHier = async (req, res) => {
    const data = await studentService.getStudentByHier(req.params.id);
    res.json(data);
};

const addStudent = async (req, res) => {
    const studentAddDto = new studentAddDto(req.body);
    await studentService.addStudent(studentAddDto);
    res.status(201).json({ message: "data has been added successfully" });
};

module.exports = {
    getAllStudents,
    addStudent,
    getStudentById,
    getStudentByHier
};