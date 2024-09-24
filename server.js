// server.js
require('dotenv').config();
const port = process.env.PORT;
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./app'); // Importa as rotas
const helmet = require('helmet');

const app = express();

// Conexão com o banco de dados
mongoose.connect(process.env.MONGODB)
    .then(() => {
        console.log('Conectado com base de dados');
        app.emit('ready');
    })
    .catch(e => console.log(e));

// Middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessionOptions = session({
    secret: 'sfdsdfddf esfsdfsdfsfsd dsffdsfsfsfsfdsffsf wrew',
    store: MongoStore.create({ mongoUrl: process.env.MONGODB }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    },
});

app.use(sessionOptions);
app.use(flash());

// Rotas
app.use('/api', routes); // Prefixo da API

app.on('ready', () => {
    app.listen(port, () => {
        console.log(`Escutando na porta ${port}`);
    });
});
