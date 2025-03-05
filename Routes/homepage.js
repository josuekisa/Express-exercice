const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser'); // Middleware



router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../static/index.html'));

} )

router.get('/registrer', (req,res) =>{
    res.sendFile(path.join(__dirname,'../static/registrer.html'));
})

module.exports = router;