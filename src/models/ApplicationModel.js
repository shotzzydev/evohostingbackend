const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Login', required: true }, 
    name: { type: String, required: true },
    avatar: { type: String, required: true },
    type: { type: String, enum: ['bot', 'site'], required: true },
    main: { type: String, required: true },
    ram: { type: Number, required: true },
    autorestart: { type: Boolean, required: true },
    version: { type: String, required: true },
    apt: { type: String, required: true }, 
    creatat: { type: Date, default: Date.now },
});

const ApplicationModel = mongoose.model('Application', ApplicationSchema);

function Application(file) {
    this.body = file;
    this.errors = [];
    this.application = null
}

Application.BuscaPorId = async function(id) {
    const app = await ApplicationModel.findById(id);
    return app;
}

Application.prototype.register = async function() {
    this.valida();

    if(this.errors.length > 0) return;
    this.application = await ApplicationModel.create(this.application);
}

Application.prototype.valida = function() {
    if (!this.file.name) {
        this.errors.push('O nome da aplicação não foi informado no arquivo evohosting.config. Consulte nossa documentação para mais detalhes: http://127.0.0.1:/documents');
    }
    if (!this.file.type) {
        this.errors.push('O tipo da aplicação não foi informado no arquivo evohosting.config. Consulte nossa documentação para mais detalhes: http://127.0.0.1:/documents');
    }
    if (!this.file.main) {
        this.errors.push('O arquivo principal do seu projeto não foi informado no arquivo evohosting.config. Consulte nossa documentação para mais detalhes: http://127.0.0.1:/documents');
    }
    if (!this.file.ram) {
        this.errors.push('A quantidade de RAM não foi informada no arquivo evohosting.config. Consulte nossa documentação para mais detalhes: http://127.0.0.1:/documents');
    }
    if (!this.file.version) {
        this.errors.push('A versão do seu projeto não foi informada no arquivo evohosting.config. Consulte nossa documentação para mais detalhes: http://127.0.0.1:/documents');
    }
}


module.exports = Application;
