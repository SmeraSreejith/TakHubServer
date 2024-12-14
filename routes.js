//import express
const express = require('express')

//import taskcontroller
const taskController=require('./controller/taskController')

//import usercontroller
const userController=require('./controller/userController')

//middleware
const jwtmiddle=require('./middleware/jwtMiddleware')

//create an object for router class
const router = new express.Router()

//register
router.post('/reg',userController.userRegistration)

//login
router.post('/log',userController.userLogin)

//addtask
router.post('/addtask',jwtmiddle,taskController.addTask)

//get task
router.get('/gettask',jwtmiddle,taskController.getTask)

//get task by id
router.get('/getbyid/:tid',jwtmiddle,taskController.getTaskById)

//delete task
router.delete('/deletetask/:id',jwtmiddle,taskController.deleteTask)

 //update task
router.put('/updatetask/:id',jwtmiddle,taskController.updateTask) 




//export the router
module.exports = router