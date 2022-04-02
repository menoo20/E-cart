const router = require("express").Router();

 router.get("/userTest", (req, res)=>{
    res.send("router is working");
})


router.post("/postUser", (req, res)=>{
    const username = req.body.username;
    res.send(username)
})

module.exports = router