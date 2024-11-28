const {Router} = require('express') //  use express router
const controller = require("./controller"); // get the controller object
const router = Router(); // router object

// create  get all students endpoint
router.get("/", controller.getStudents)

// create add student endpoint
router.post("/", controller.addStudentToBD)

// create get student by id endpoint
router.get("/:id", controller.getStudentByID)

// create delete student endpoint
router.delete("/:id", controller.RemoveStudent)

// create update student endpoint
router.put("/:id", controller.UpdateStudent)

// export object
module.exports = router;