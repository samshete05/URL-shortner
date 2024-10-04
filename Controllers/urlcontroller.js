//nanoid means small, secure, and URL-friendly unique ID generato
//it creates a random ids

const URL = require("../Models/urlModel")


async function generateNewShortendUrl(req,res){
    const {nanoid} = await import("nanoid")
    const body = req.body
    if(!body.url){
        console.log(res.status(404).json({message:"URL is required."})
    )
        return res.status(404).json({message:"URL is required."})
    }
    const shortURL =  nanoid(2)
    await URL.create({
        shortId: shortURL,
        originalId : body.url,
        clicksHistory:[],
    })
    return res.send({id:shortURL})
}

module.exports={
    generateNewShortendUrl
}