const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

const stuffRoute = require('./routes/stuff');
const userRoute = require('./routes/user');

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
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use('/api/stuff', stuffRoute);
app.use('/api/auth', userRoute);
app.use(cors(corsOptions));

module.exports = app;