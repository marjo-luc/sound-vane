const express = require("express")
const router = express.Router()
const axios = require('axios')
require('dotenv').config()

router.get("/", (req, res, next) => {
    res.status(200).send({ data: 'Air Quality' });
})

router.get("/location", (req, res, next) => {

    console.log(process.env.AQI_TOKEN)
    let { lng, lat } = req.query
    axios.get(`https://api.waqi.info/feed/geo:${lat};${lng}/?token=${process.env.AQI_TOKEN}`)
        .then(response => {
            res.status(200).send({ response: response.data });
        })
        .catch(error => {
            console.log(error);
            res.status(400).send(error);
        });
})

module.exports = router