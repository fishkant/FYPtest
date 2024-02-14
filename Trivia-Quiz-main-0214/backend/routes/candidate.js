
const express = require("express");
const { Candidate } = require("../models/candidateData");



const router = express.Router();



router.post("/", (req,res) => {
    const dataset = req.body;
    console.log(req)
    console.log(req.body)
    try {
        if (req) {
            console.log('request got');
            //console.log(req.body);

            const candidate = new Candidate({
                 //title:"Fix my bugs",
                 //title:req.body.title,
                 timers:req.body.timers,
                 selections:req.body.selections,
                 gender:req.body.gender,
                 age:req.body.age,
                 //title:req.title,
                 //timer:req.body.timersvalue,
                 //selections: req.body.optionsvalue,
             }); 
             newcandidate = candidate.save()
             res.send(newcandidate);
        }
       

      } catch (error) {
        console.log(error);
        res.status(500).send(error);
        //console.log('no request ');
      }
    });







  


module.exports = router;