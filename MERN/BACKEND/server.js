const express = require('express')
const mongoose  = require('mongoose')
const workoutsRoutes = require('./Routes/workouts')
const fs = require("fs")
const swaggerUI= require('swagger-ui-express')
const swaggerJson= require ("./swagger.json")
const customCss = fs.readFileSync((process.cwd()+"/Routes/swagger.css"), 'utf8');


// let express to use this


require('dotenv').config()

const app = express()


app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJson, {customCss}));


app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.get('/', (req, res) => {
    res.json({mssg:"Welcome to the app"})
})


app.use('/api/workouts' ,workoutsRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>{
        console.log(' connected to the db and listening on port', process.env.PORT)
    })
  })

  .catch((error) => {
    console.log(error)
  })