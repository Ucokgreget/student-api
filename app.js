require('dotenv').config()
const express = require('express');
const app = express();
const studentRoute = require('./routes/studentRoute')
const connectDB = require('./db/connect')
const notFound =require('./middleware/notFound')
const errorHandleMiddleware = require('./middleware/errorHandler')

app.use(express.json())


app.use('/api/v1/student', studentRoute)


app.use(notFound)
app.use(errorHandleMiddleware)

const port = process.env.PORT || 3000

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server is listening on port : ${port}`))
    } catch (error) {
        console.log(error);
        
    }
}

start()