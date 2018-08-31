const { Service } = require('../models');

module.exports = {
    // Create 
  create(req, res) {
    return Service
      .create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
      })
      .then(service => res.status(201).send(service))
      .catch(error => res.status(400).send(error));
  },

  // Update
  update(req, res) {
    return Service
      .update({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
      }, {
          where: {
              id: req.params.id
          }
      })
      .then(rows => res.status(201).send(`Update successful!`))
      .catch(error => res.status(400).send(error));
  },

  // Delete
  delete(req, res) {
    return Service
      .destroy({
          where: {
              id: req.params.id
          }
      })
      .then(rows => res.status(201).send(`Delete successful!`))
      .catch(error => res.status(400).send(error));
  },

  // Get All
  list(req, res) {
    return Service
      .all({
          order: [['id', 'ASC']]
      })
      .then(services => res.status(201).send(services))
      .catch(error => res.status(400).send(error));
  },
};