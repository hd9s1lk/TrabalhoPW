let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MarcaçãoSchema = new Schema({
    nrMarcação: {type: Number, required: true, unique:true},
    nomeCli: {type: String, required: true},
    Data: {type: Date, required: true},
    Hora: {type: Number, required: true},
    Produto: {type: String, required: true}
});

let Marcação = mongoose.model('Cliente', MarcaçãoSchema);


module.exports = Marcação;


