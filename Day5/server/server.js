const express = require('express');//import express module
const app = express();//initialize express app
const studentData=require("./routes/students")//import students route
app.use(express.json())

app.use("/students",studentData)//use routers




app.listen(4000, () => {
    console.log('Server is running on port 4000'); //log message when server starts
});