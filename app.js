const express = require("express")
const {generateNewShortendUrl,createshortenerurl} = require("./Controllers/urlcontroller")
const connectDB = require("./connection/database")


const app = express()
const port = 8000

app.use(express.json())

app.post("/url",generateNewShortendUrl) //shorturl lene ke liye
app.get("/:shortId",createshortenerurl)  //redirect karne ke liye that is puri link create karne ke liye


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
