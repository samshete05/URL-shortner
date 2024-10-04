const express = require("express")
const {generateNewShortendUrl} = require("./Controllers/urlcontroller")
const connectDB = require("./connection/database")
// const mongoose = require("mongoose")

const app = express()
const port = 8000

app.use(express.json())

app.post("/url",generateNewShortendUrl)


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
