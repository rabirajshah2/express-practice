const router = require("express").Router();

router.get("/" , (req, res)=>{
    res.json({msg: "Get all  users data"});
});

router.get("/:name" , (req, res)=>{ // colon aayo vane single data sanga khelxa
   // req.params.name;
    res.json({msg: `Hello ${req.params.name}`});
});

router.post("/" , (req, res)=>{
    res.json({msg: "create new users"});
});

router.put("/:id" , (req, res)=>{ // colon aayo vane single data sanga khelxa
    res.json({msg: `updating full data of  ${req.params.id}`});
});

router.patch("/:id" , (req, res)=>{ // colon aayo vane single data sanga khelxa
    res.json({msg: `updating single data of  ${req.params.id}`});
});

router.delete("/:id" , (req, res)=>{ // colon aayo vane single data sanga khelxa
    req.params.id;
    res.json({msg: `deleting a data of  ${req.params.id}`});
});

module.exports= router;

/*
CRUD 
post => create
get => read 
put => update (update all data)
patch => update (update single data)
delete => delete
*/