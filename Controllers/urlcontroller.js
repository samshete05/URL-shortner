//nanoid means small, secure, and URL-friendly unique ID generato
//it creates a random ids


const URL = require("../Models/urlModel"); 


async function generateNewShortendUrl(req, res) {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ message: "URL is required." });
    }
 
    try {
        const { nanoid } = await import('nanoid'); //its a dynamic import
        const shortURL = nanoid(6);
        await URL.create({
            shortId: shortURL,
            originalId: body.url,
            clicksHistory: [],
            totalclicks:0,
        });
        return res.status(201).send({ url: shortURL });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error." });
    }
}
async function createshortenerurl(req, res) {
    const { shortId } = req.params; 
    console.log(shortId)
    try {
        const input_url_Id = await URL.findOne({ shortId });
        if (!input_url_Id) {
            return res.status(404).json({ message: "URL not found." });
        }

        input_url_Id.totalClicks += 1;
        input_url_Id.clicksHistory.push({ timeStamp: Date.now() }); 
        await input_url_Id.save();
        return res.redirect(input_url_Id.originalId); //redirectig to the original url
        // res.send("hi")
    } catch (error) {
        return res.status(500).json({ message: "Error in creating url" });
    }
}

module.exports = {
    generateNewShortendUrl,
    createshortenerurl
};

