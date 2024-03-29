const shortid = require('shortid');
const URL = require('../models/url');

async function handleGenerateNewShortURL(req,res){
    const shortID = shortid(8);
    const body = req.body;
    if(!body.url) return  res.status(400).json({error: 'You must provide a URL to be shortened'});

    await URL.create({
        shortId :  shortID ,
        redirectURL : body.url,
        visitHistory:[],
    });

    return res.json({id:shortID});
}

module.exports = {
    handleGenerateNewShortURL,
}