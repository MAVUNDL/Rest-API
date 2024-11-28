const express = require('express'); // import express library
const studentRouter = require("./src/student/routes"); // import first route
const app = express() // create express app
const port = 3000 // set port number

// allow json from endpoints
app.use(express.json());

// create first endpoint
app.get("/", (req, res) => {
    res.send("Hello there");
})

// use the imported route
app.use("/api/v1/students", studentRouter);

// listen on the port
app.listen(port, () => console.log(`Server listening on Port: ${port}`));

