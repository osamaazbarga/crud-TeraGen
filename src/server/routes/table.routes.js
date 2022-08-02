const express = require('express');
const router=express.Router()
require('../config/db')
const Table = require('../models/table.model')

const{
    addBubble,
    getBubbles,
    removeBubble,
    removeBubbles,
}=require("../controllers/table.controller")

// router.get('/getbubbles',getBubbles)//get all Bubbles
// router.post('/addbubble',addBubble)//add bubble
// router.delete('/removebubble',removeBubble)//remove x tag
// router.delete('/removebubbles',removeBubbles)//remove x tag

router.get('/getbubbles', async (req, res) => {
    let bubbles = await Table.find({})
    res.json(bubbles)
})

router.post('/addbubble',async (req, res) => {
    console.log('req.body',req.body);
    try {
        const newBubble = await new Table(req.body).save()
        console.log("req.body try",req.body);
        res.json(newBubble)
    } catch (err) {
        //res.status(400).send('Create product faild')
        res.status(400).json({
            err: err.message,
        })
    }
})

router.delete('/removebubble/:id',async(req,res)=>{
    try {
        const deleted =await Table.findOneAndDelete({_id:req.params.id}).exec()
        res.json(deleted)
        
    } catch (error) {
        res.status(400).send("Create Delete Failed")
        
    }
})

router.delete('/removebubbles',async(req,res)=>{
    try {
        const deleted =await Table.deleteMany({}).exec()
        res.json(deleted)
        
    } catch (error) {
        res.status(400).send("Create Delete Failed")
        
    }
})



module.exports=router