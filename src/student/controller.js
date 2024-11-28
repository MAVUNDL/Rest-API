const pool = require("../../db"); // get the db connector object
const queries = require("./queries");

// function to get ll students from the database
const getStudents = (req, res) => {
    pool.query(queries.getstudents, (error, results) => {
        if (error) throw error; // throw the err
        // if okay send response
        res.status(200).json(results.rows);

    });
};

// function to get a student by id from the database
const getStudentByID = (req, res) => {
    const id = parseInt(req.params.id); // get id from the query
    // send query to database, accept the id from the query
    pool.query(queries.getstudentbyID, [id], (err, results) => {
        if(err) throw err;
        res.status(200).json(results.rows);
    });
};

// function to add student to the database
const addStudentToBD = (req, res) =>{
    // destructure the requesr
    const { name, email, age, dob } = req.body;
    // check if email already exits
    pool.query(queries.checkEmailExists, [email], (err, results) => {
        if(results.rows.length){
            res.send("Email already exits");
        }

        // add student
        pool.query(queries.addstudent, [name, email, age, dob], (err, results) => {
            if(err) throw err;
            res.status(201).send("Student added to database")
        })
        
    })
};

// function to remove a student from tha database
const RemoveStudent = (req, res) => {
    // get the id
    const id = parseInt(req.params.id);
    // check if the id exists
    pool.query(queries.getstudentbyID, [id], (err, results) => {
        const nostudent = !results.rows.length;
        if(nostudent){
            res.send("Student does not exist with that id");
        }

        // delete student if id exits
        pool.query(queries.removestudent, [id], (err, results) => {
            if(err) throw err;
            res.status(200).send("Student removed successfully");
        });
    });
};

// function to update student from the database
const UpdateStudent = (req, res) => {
    const id  = parseInt(req.params.id);
    // destructure
    const {name} = req.body;
    // check if id exits
    pool.query(queries.getstudentbyID, [id], (err, results) => {
        const nostudent = !results.rows.length;
        if(nostudent){
            res.send("Student with that id does not exist in the database");
        }

        // if id exits update name of student
        pool.query(queries.updatestudent, [name, id], (err, results) => {
            if(err) throw err;
            res.status(200).send("Student updated successfully");
        })
    });
};


module.exports = {
    getStudents,
    getStudentByID,
    addStudentToBD,
    RemoveStudent,
    UpdateStudent,
};