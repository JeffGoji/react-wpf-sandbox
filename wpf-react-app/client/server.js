const express = require('express');
const cors = require('cors');
const { response } = require('express');
// const bodyParser = require("body-parser");
const dbOperation = require('../server/dbOperation');

//Call the database operation:
dbOperation.getNoms().then(res => {
    return res;
})

//Set API port and Express server:
const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

//Creates the http://localhost:5000/noms address to get the json data from the server
app.get('/noms', async (req, res) => {
    const result = await dbOperation.getNoms(req.body)
    res.send(result)
})

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
