const express = require('express');
const router = express.Router() ;
const User = require('../models/user');
const bodyParser = require('body-parser');
const { patch } = require('./fighterRoutes');

router.use(bodyParser.urlencoded({ extended: true }));


router.post('/',async function(req, res){
   
    const {username,password} = req.body;
   if(!username || !password){
    return res.status(400).json({error: 'veuillez remplir tous les champs'})
   }
   try{
   const user = await User.findOne({ 
    $or:[{username }, {email : username}]
   });
    if(!user){
        return res.status(404).json({error: 'utilisateur non trouvé'})
    }
   
        if(user.password !== password){
            return res.status(401).json({error: 'mot de passe incorrect'})
        }
        console.log('Connexion réussie !'); 
        res.redirect('/dashboard')
    
   
}
    catch(err){
        console.error(err)
        return res.status(500).json({error: "erreur lors de la recherche de l'utilisateur"})
    }
})

module.exports = router;