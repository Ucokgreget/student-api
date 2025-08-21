require('dotenv').config();
const connectDB = require('./db/connect')
const Student = require('./model/studentModel')
const studentJson = require('./student.json')


const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI);
        await Student.deleteMany()
        await Student.create(studentJson)
        console.log("successs!!!");
        process.exit(0) 
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
   
}

start()