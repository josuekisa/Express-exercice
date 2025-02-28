const express = require('express');
const router = express.Router() ;
const app = express();
const bodyParser = require('body-parser'); // Middleware 
const User = require('../models/user');

router.use(bodyParser.urlencoded({ extended: true }));


router.post('/registrer',async function (req,res){
    
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password,saltRound)
    const user = new User ( {
        username:req.body.username,
        email:req.body.email,
        password: hashedPassword 

      
    })
      await user.save();
      res.status(201).json('utilisateur cree avec succes')

   
    
})

module.exports = router;
