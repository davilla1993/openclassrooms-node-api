const express = require('express');
const mongoose = require('mongoose');
const app = express();

const stuffRoute = require('./routes/stuff');

mongoose.connect('mongodb+srv://root:toor-toor@cluster0.oh5b4oc.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à Mongodb réussie !!'))
    .catch(() => console.log('Connexion à Mongodb échouée !!!'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/stuff', stuffRoute);

module.exports = app;