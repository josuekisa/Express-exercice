
const mongoose = require('mongoose');


const connectDB = () => {
   

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
}

module.exports = connectDB
