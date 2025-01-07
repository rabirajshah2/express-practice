1. npm init -y
2. npm i express
3. create .gitignore file
4. add node_modules in .gitignore file

5. create index.js
6. require express
7. initialize express application using express()
8. listen to port with callback

9. go to package.json only to see nodemon is installed or not
10. npm i -D nodemon
11. go to script section of package.json and add "dev" : "nodemon index.js"
12. npm run dev //if dev ko thau ma script lekhthyau vane "npm run script" lekhthyau

13. go to index.js
14. create API endpoints with 5 methods
    a. app.get("/", (req, res )=>{
    res.json({msg: "Hello World "});
    });
15. play around with 5 differents methods
16. require dotenv package and implement it in express application
    a. create .env file in the root
    b. add .env file in the .gitignore file
    c. write PORT=8889 in .env file
    d. create .env.example file as well but do not add values
    e. we do not add .env file into git because it contains sensitive information
    f. go to the index.js and at the very top add >> require('dotenv').config(); after that write const PORT= Number(process.env.PORT) || 3111;
    g. app.listen(PORT, ()=>{
    console.log(`app is running on ${PORT}`)
    })
