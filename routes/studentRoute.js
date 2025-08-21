const express = require('express');
const router = express.Router();
const { getAllStudent,
        createStudent,
        getStudent,
        deleteStudent,
        updateStudent} = require('../controller/studentController')




router.route('/').get(getAllStudent).post(createStudent)
router.route('/:nim').get(getStudent).delete(deleteStudent).patch(updateStudent)



module.exports = router;