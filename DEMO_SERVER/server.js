const express = require("express");
const app =
  express() +
  app.get("/test", (request, response) => {
    response.send("HELLO FROM EXPRESS SERVER");
  });

//npm install -g nodemon
//GET:
app.get("/fruits", (request, response) => {
  const fruitArray = [
    { name: "Apple", color: "red", price: 100 },
    { name: "Banana", color: "yellow", price: 10 },
    { name: "Mango", color: "yellow", price: 50 },
    { name: "Stawberry", color: "red", price: 5 },
    { name: "Orange", color: "orange", price: 20 },
    { name: "Kiwi", color: "brown", price: 200 },
  ];
  //POST :
  app.post("/login", (request, response) => {
    response.send("Post Method Called");
  });
  //PUT:
  app.put("/update", (request, response) => {
    response.send("Put Method Called");
  });
  //DELETE :
  app.delete("/delete", (request, response) => {
    response.send("DELETE Method Called");
  });

  response.send({
    status: "success",
    message: "data send",
    fruitArray: fruitArray,
  });
});

//mysql:4000
app.listen(4444, () => {
  console.log("Server started as PORT :${PORT}");
});
