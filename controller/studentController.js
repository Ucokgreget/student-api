const Student = require('../model/studentModel')
const createCustomError = require('../error/custom-error')

const getAllStudent = async (req, res) => {
    const student = await Student.find({})
    res.status(200).json({ student })
}

const createStudent = async (req, res) => {
    const student = await Student.create(req.body)
    res.status(201).json({student});
}

const getStudent = async (req, res, next) =>{
    const {nim} = req.params;
    const nimMhsw = Number(nim)
    const student = await Student.findOne({nim:nimMhsw})
    if(!student){
        return next(createCustomError(`tidak ada mahasiswa dengan nim ${nimMhsw}`, 404))
    }
    res.status(200).json(student)   
}

const deleteStudent = async (req, res, next) => {
    const {nim} = req.params;
    const nimMhsw = Number(nim)
    const student = await Student.findOneAndDelete({nim:nimMhsw});
    if(!student){
        return next(createCustomError(`tidak ada mahasiswa dengan nim ${nimMhsw}`, 404))
    }
    res.status(200).json(student)
}

const updateStudent = async (req, res, next) => {
    const {nim} = req.params
    const nimMhsw = Number(nim)
    const student = await Student.findOneAndUpdate({nim:nimMhsw}, req.body, {
        new:true,
        runValidator:true
    })

    if(!student){
        return next(createCustomError(`tidak ada mahasiswa dengan nim ${nimMhsw}`, 404))
    }
    res.status(200).json(student)
}






module.exports = {
    getAllStudent,
    createStudent,
    getStudent,
    deleteStudent,
    updateStudent
}
    