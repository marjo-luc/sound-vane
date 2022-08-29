const express = require("express")
const router = express.Router()
const axios = require('axios')

router.get("/", (req, res, next) => {
    res.status(200).send({ data: 'Air Quality' });
})

router.get("/location", (req, res, next) => {

    console.log(process.env)
    let { lng, lat } = req.query
    axios.get(`https://api.waqi.info/feed/geo:${lat};${lng}/?token=8a8851cbcfb8c720fac9f996d042e4638590b9aa`)
        .then(response => {
            //console.log(response.data);
            res.status(200).send({ response: response.data });
        })
        .catch(error => {
            console.log(error);
            res.status(400).send(error);
        });
})

module.exports = router