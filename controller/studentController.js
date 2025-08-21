const Student = require('../model/studentModel')

const getAllStudent = async (req, res) => {
    const student = await Student.find({})
    res.status(200).json({ student })
}

const createStudent = async (req, res) => {
    const student = await Student.create(req.body)
    res.status(201).json({student});
}

const getStudent = async (req, res) =>{
    const {nim:nimMhsw} = req.params;
    const student = await Student.findOne({nim:nimMhsw})
    if(!student){
        return res.status(404).json({msg:`tidak ada mahasiswa dengan nim: ${nimMhsw}`})
    }
    res.status(200).json(student)   
}

const deleteStudent = async (req, res) => {
    const {nim:nimMhsw} = req.params;
    const student = await Student.findOneAndDelete({nim:nimMhsw});
    if(!student){
        return res.status(404).json({msg:`tidak ada mahasiswa dengan nim: ${nimMhsw}`})
    }
    res.status(200).json(student)
}

const updateStudent = async (req, res) => {
    const {nim:nimMhsw} = req.params;
    const student = await Student.findOneAndUpdate({nim:nimMhsw}, req.body, {
        new:true,
        runValidator:true
    })

    if(!student){
        return res.status(404).json({msg:`tidak ada mahasiswa dengan nim: ${nimMhsw}`})
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
    