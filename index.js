//import dotenv- to load environment variable
require('dotenv').config()

//import express
const express = require('express')

//import cors
const cors = require('cors')

//import router
const router = require('./routes')

//create express server

const server=express()

require('./connection/db')

//use cors - to communicate with the view
server.use(cors())

//use json method - returns middleware which can parse json format
server.use(express.json())

//use router
server.use(router) 

//set port for server
const PORT=3000 || process.env.PORT

//listen to the port to resolve request
server.listen(PORT,()=>{
    console.log(`Server running successfully at:${PORT}`)
})
