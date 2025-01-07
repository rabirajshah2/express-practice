require('dotenv').config();
// console.log(process.env);
const express = require("express");

const app = express();  // it automatically creates server no need to de http.createServer()
// Methods >> get(read), post(create), put(update), patch(update), delete(delete)
// only get method is used in browser, other four methods can be used from postman app 
//API (get method; Endpoint: / )

const PORT =  Number(process.env.PORT) || 3111 ;

app.get("/", (req, res )=>{
res.json({data : "Hello World"});
});

app.get("/google", (req, res )=>{
    res.redirect("https://google.com");
    });

app.post("/", (req, res )=>{
    res.json({data : "Posting Hello World"});
    });

app.put("/", (req, res )=>{
        res.json({data : "Putting Hello World"});
        });

app.patch("/", (req, res )=>{
            res.json({data : "Patching Hello World"});
            });

app.delete("/", (req, res )=>{
                res.json({data : " Deleting Hello World"});
                });


app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`);
});