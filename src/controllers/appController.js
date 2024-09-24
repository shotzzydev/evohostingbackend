const Application = require('../models/ApplicationModel');

exports.appGet = (req, res) => {
    res.render('app');
};

exports.appStartPost = (req, res) => {
    res.render('app');
};

exports.appStopPost = (req, res) => {
    res.render('app');
};

exports.appRestartPost = (req, res) => {
    res.render('app');
};

exports.appCommitPost = (req, res) => {
    res.render('app');
};

exports.register = async(req, res) => {
    try {
        const application = new Application();
        await application.register();
    
        if(application.errors.length > 0) {
            req.flash('errors', application.errors);
            req.session.save(() => res.redirect('/dashboard'));
            return;
        }
        
        req.flash('success', 'Aplicação iniciada com sucesso!');
        res.session.save(() => res.redirect('/dashboard'));
        return;
    } catch(e) {
        console.log(e);
        return res.render('404');
    }

}