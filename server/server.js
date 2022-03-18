const express = require("express")
const app = express()
const map_box = require("./routes/MapBox")
const air_quality =require("./routes/AirQuality")

BACKEND_PORT = 3001

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/mb", map_box)
app.use("/aq", air_quality)

app.listen(BACKEND_PORT, () => {
  console.log("Node server listening on port: ", BACKEND_PORT)
})

