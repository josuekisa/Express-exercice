const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser'); // Middleware

const homepage = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../static/index.html'));

} )

module.exports = homepage;