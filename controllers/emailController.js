const db = require('../models');
module.exports = {
    findAll: function(req, res) {
        db.Email
            .find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err))
    },

    createEmail: function(req, res) {
        db.Email
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err))
        
    },
}