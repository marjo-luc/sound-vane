const express = require("express")
const app = express()

BACKEND_PORT = 3001

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/test', function (req, res) {
    // This is where the actual api calls are handled
    res.status(200).send({message: 'Reached the backend!'});
})


app.listen(BACKEND_PORT, () => {
  console.log("Node server listening on port: ", BACKEND_PORT)
})