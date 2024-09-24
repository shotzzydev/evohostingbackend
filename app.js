// app.js
require('dotenv').config();

const express = require('express');
const { middlewareGlobal, checkCsrfErro, csrfMiddleware } = require('./src/middlewares/middleware');
const homeRoutes = require('./src/routes/homeRoutes');
const loginRoutes = require('./src/routes/loginRoutes');
const plansRoutes = require('./src/routes/plansRoutes');
const dashboardRoutes = require('./src/routes/dashboardRoutes');
const documentationRoutes = require('./src/routes/documentationRoutes');
const appRoutes = require('./src/routes/appRoutes');

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(middlewareGlobal);
        this.app.use(checkCsrfErro);
        this.app.use(csrfMiddleware);
    }

    routes() {
        this.app.use('/api/home', homeRoutes);
        this.app.use('/api/login', loginRoutes);
        this.app.use('/api/plans', plansRoutes);
        this.app.use('/api/dashboard', dashboardRoutes);
        this.app.use('/api/documentation', documentationRoutes);
        this.app.use('/api/app', appRoutes);
    }
}

module.exports = new App().app;
