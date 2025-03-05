const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const path = require('path');

// Middleware pour parser les données du formulaire
app.use(express.urlencoded({ extended: true }));

// Servir les fichiers statiques
app.use(express.static('static'));

// Connexion à la base de données
connectDB();


// Import des routes
const Fighter = require('./Routes/fighterRoutes');
const homepage = require('./Routes/homepage');
const registrer = require('./Routes/registrer');
const login = require('./Routes/login');
const dashboard = require('./Routes/dashboard');

console.log(app._router.stack.map(layer => layer.route ? layer.route.path : layer.name));

// Définition des routes
app.use('/', homepage);
app.use('/mmaFighter', Fighter);
app.use('/registrer', registrer);
app.use('/login', login);
app.use('/dashboard', dashboard);

app.get('/dashboard-test', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'dashboard.html'));
});
// Démarrage du serveur
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

/*


mongoose.connect('mongodb://localhost:27017/mmaFighter', {
  
})
.then(() => console.log('Connexion réussie à MongoDB'))
.catch(err => console.error('Erreur de connexion à MongoDB', err));

mongoose.connection.on('connected', () => {
    console.log('📡 Mongoose est bien connecté à la base de données locale.');
});
mongoose.connection.on('error', (err) => {
    console.error('❌ Erreur Mongoose :', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('⚠️ Mongoose est déconnecté.');
});




const Fighter = mongoose.model('fighter',new mongoose.Schema ({
    nom: String,
    prenom: String,
    age: Number,
    record: String

}),'fighter');

app.listen(port ,()=> {
    console.log(`Server is running at http://localhost:${port}`);
})

//endpoit pour le read
app.get('/mmaFighter', async (req, res) => {
   try {
    const fighters = await Fighter.find();
    res.json(fighters);
   } catch (err) {
    res.status(500).json({error: err.message});
   }
})

//endpoint id fighter
app.get('/mmaFighter/:id', async (req,res) => {
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
app.post('/mmaFighter', async (req, res) =>{
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


/* endpoint update
app.put('/mmaFighter/:id', async (req, res) => {
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

/*endpoit delete
app.delete('/mmaFighter/:id', async (req, res) => {
    const fighter = await Fighter.findByIdAndDelete(req.params.id)
    try{
        fighter ? res.send(fighter) : res.status(404).json('404 Not Found')
    }

    
    catch (err) {
        res.status(500).json({error: err.message});
    }
})**/