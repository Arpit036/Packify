const express = require("express")
const router = express.Router();
const ownerMOdel = require("../models/ownerModel");


router.get("/", function(req, res){
    res.send("hey its working");
});


if(process.env.NODE_ENV === "development"){
    router.post("/create",async function (req, res){
      let owners = await ownerModel.find();
      if(owners.length>0) {
        return res
      .status(503)
      .send("you don't have permission to create anew owner")
      }
    
      let {fullname, email, password} = req.body;


     let createdOwner =  await ownerMOdel.create({
        fullname,
        email,
        password,
      });
      res.status(201).send("createdaowner")
    });
}

 

module.exports = router;