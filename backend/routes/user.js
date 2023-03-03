const express = require("express")
const userSchema = require("../models/task")
const router = express.Router()

//create task
router.post("/taskList", (req, res) =>{
    const task = userSchema(req.body)
    task
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
    // res.send("create user")
})
//get all task

router.get("/taskList", (req, res) =>{
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
    
})
//get a task

router.get("/taskList/:id", (req, res) =>{
    const { id } = req.params
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})
//update a task

router.put("/taskList/:id", (req, res) =>{
    const { id } = req.params
    const { task, description, } = req.body
    userSchema
        .updateOne({ _id:id }, { $set: {task,description} })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})
//delete a task

router.delete("/taskList/:id", (req, res) =>{
    const { id } = req.params
    userSchema
        .remove({ _id:id })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

router.put("/taskListEstado/:id", (req, res) =>{
    const { id } = req.params
    const { estado } = req.body
    userSchema
        .updateOne({ _id:id }, { $set: {estado} })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})


module.exports = router