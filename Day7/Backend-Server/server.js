const express = require("express"); //imported express
const app = express(); //This line creates an Express application object.

//This line imports the Admin routes module and stores it in adminRouter.
const adminRouter = require("./Routes/Admin");

//This line imports the public routes module and stores it in publicRouter.
const publicRouter = require("./Routes/Public");

//This line imports the student routes module and stores it in studentRouter.
const studentRouter = require("./Routes/Students");

const { authenticationUser, authorizedUser } = require("./Utils/userAuth");

//Enables your app to read JSON data sent in requests.
//It parses the request body and puts the data into req.body.

// If a client sends:
// {
//   "name": "Arya",
//   "role": "student"
// }
//Without this line → req.body will be undefined
//With this line → req.body contains the JSON object
app.use(express.json());

app.use("/public", publicRouter);
app.use("/admin", authenticationUser, authorizedUser, adminRouter);
app.use("/students", authenticationUser, studentRouter);

app.listen(4000, () => {
  console.log("Server started on port 4000 .......");
});
