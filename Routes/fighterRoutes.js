

const express = require('express');
const router = express.Router();
const Fighter = require('../models/fighter');





//endpoit pour le read
router.get('/mmaFighter', async (req, res) => {
     console.log(req.body)
    try {
    const fighters = await Fighter.find();
    
    res.json(fighters);
   } catch (err) {
    res.status(500).json({error: err.message});
   }
})

//endpoint id fighter
router.get('/mmaFighter/:id', async (req,res) => {
     try{
        const fighter = await Fighter.findById(req.params.id)
        fighter ? res.json(fighter) : res.status(404).json({error:'ya pas de panneaux'});
        console.log(req.params.id)
     }
     catch(err){
        res.status(500).json({error :" y'a un probleme sur le reseau magle trouve une solution"});
     }
})


 //endpoint post
router.post('/mmaFighter', async (req, res) =>{
   console.log(req.body)  // inspect the incoming request body  // debug
   try {
    const fighter = new Fighter({
        nom: req.body.nom,
        prenom: req.body.prenom,
        age: req.body.age,
        record: req.body.record
    })
    await fighter.save() // sauvgarde le nouveau fighter dans la bdd
    res.json(fighter) 
}
catch (err){
    console.log(err)
    res.status(500).json({error : 'erreur 500'})
}
})


/* endpoint update*/
router.put('/mmaFighter/:id', async (req, res) => {
  try {
    const fighter = await Fighter.findByIdAndUpdate(
        req.params.id ,
        {
            nom: req.body.nom,
            prenom: req.body.prenom,
            age: req.body.age,
            record: req.body.record
        },
          {new : true},
    )
    
       res.send(fighter)

  }
  catch (err) {
    res.status(500).json({error: err.message});
  }
})

/*endpoit delete*/
router.delete('/mmaFighter/:id', async (req, res) => {
    const fighter = await Fighter.findByIdAndDelete(req.params.id)
    try{
        fighter ? res.send(fighter) : res.status(404).json('404 Not Found')
    }

    
    catch (err) {
        res.status(500).json({error: err.message});
    }
})

module.exports = router ;