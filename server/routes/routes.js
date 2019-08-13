const express = require('express');
const router = express.Router();
const handlers = require('../handlers/handlers').default

router.get('/getAll' , (req , res )=>{
    console.log("the client asked for:  " + req.url)
    handlers.getAll(req , res);
})

router.get('/getSpecific/:id', (req , res)=>{
    console.log("the client asked for:  " + req.url)
    handlers.getSpecific(req, res)
})

router.get('/customerOrders/:id', (req , res)=>{
    console.log("the client asked for:  " + req.url)
    handlers.getOrders(req, res)
})

module.exports = router;