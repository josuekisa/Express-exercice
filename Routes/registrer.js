const express = require('express');
const router = express.Router() ;
const app = express();
const bodyParser = require('body-parser'); // Middleware 
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.use(bodyParser.urlencoded({ extended: true }));


router.post('/',async function (req,res){
    
   const saltRound = 10;
   //const password = req.body.password;  // mot de passe de l'utilisateur en clair
   //const hashedPassword = await bcrypt.hash(password,saltRound)
    
    if (!req.body.username || !req.body.email || !req.body.password){
        console.log(req.body.username,req.body.email,req.body.password)
        return res.status(400).json({error: 'veuillez remplir tous les champs.'})
    }
    console.log(req.body.username,req.body.email,req.body.password)
try {
    const user = new User ( {
        username:req.body.username,
        email:req.body.email,
        password: //hashedPassword 
        req.body.password

        
    })
    //console.log(user)
      await user.save();
      console.log(req.body.username,req.body.email,req.body.password)
      res.status(201);
      
}
catch (err){
    console.error(err)
    res.status(500).json({error: 'erreur lors de la creation de l utilisateur.'})
}
   
    
})

router.delete('/:id', async function(req,res){
    const user = await User.findByIdAndDelete(req.params.id)

    try{
        user? res.send(user) : res.status(404).json('404 Not Found user')
        
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }
})

module.exports = router;
