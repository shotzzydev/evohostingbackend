const mongoose = require('mongoose');

const HomeShema = new mongoose.Schema({
    titulo: { type: String, require: true },
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeShema);

class Home {

}

module.exports = Home;