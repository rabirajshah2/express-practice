// const express = require("express");
// const router = express.Router();
// These two lines of code can be converted into single one
const router = require("express").Router();
const userRouter = require("../modules/users/user.route");
router.get("/" , (req, res)=>{
res.json({msg: "Hello World"});
});

router.get("/Rabi" , (req, res)=>{
    res.json({msg: "Hello Rabi"});
    });

router.use("/users", userRouter);

router.use("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
  });

module.exports= router;