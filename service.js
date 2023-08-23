function MarcaçãoService(MarcaçãoModel) {
    let service = {
        create,
        findAll,
        findById,
        removeById

    }

    function create(value) {
        let newMarcação = MarcaçãoModel(values);
        return save(newMarcação);
    }

    function save(value) {
        return new Promise( function (resolve, reject){
            newMarcação.save(function(err) {
                if (err) reject (err);
                resolve('Marcação Anotada');
            });
        });
    }

    function findAll() {
        return new Promise(function (resolve, reject) {
            MarcaçãoModel.find({}, function (err,Cliente){
                if(err) reject(err);
                resolve(Cliente)
            })
        })
    }

    function findById(id) {
        return new Promise(function(resolve, reject){
            MarcaçãoModel.findById(id, function (err,Cliente){
                if (err) reject(err);
                resolve(Cliente);
            });
        });
    }

    function removeById(id) {
        return new Promise(function (resolve, reject) {
        console.log(id);
            MarcaçãoModel.findByIdandRemove(id, function (err) { 
                console.log(err);
                if (err) reject(err);
                resolve();
            });
        });
    }
       

    return service;
}
module.exports = MarcaçãoService;