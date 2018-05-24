module.exports = {
    create: (req, res, next)=> {
        const connection = req.app.get('db');

        connection.create_product()
            .then( ()=> res.status(200).send() )
            .catch( ()=> res.status(500).send() );
    },

    getOne: (req, res, next)=> {
        const connection = req.app.get('db');

        connection.read_product()
            .then( ()=> res.status(200).send() )
            .catch( ()=> res.status(500).send() );
    },

    getAll: (req, res, next)=> {
        const connection = req.app.get('db');

        connection.read_products()
            .then( ()=> res.status(200).send() )
            .catch( ()=> res.status(500).send() );
    },

    update: (req, res, next)=> {
        const connection = req.app.get('db');

        connection.update_product()
            .then( ()=> res.status(200).send() )
            .catch( ()=> res.status(500).send() );
    },

    delete: (req, res, next)=> {
        const connection = req.app.get('db');
        connection.delete_product()
            .then( ()=> res.status(200).send() )
            .catch( ()=> res.status(500).send() );
    },


}