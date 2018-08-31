const { Doctor } = require('../models');

module.exports = {
    // Create 
  create(req, res) {
    return Doctor
      .create({
        name: req.body.name,
      })
      .then(doctor => res.status(201).send(doctor))
      .catch(error => res.status(400).send(error));
  },

  // Update
  update(req, res) {
    return Doctor
      .update({
        name: req.body.name,
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
    return Doctor
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
    return Doctor
      .all({
          order: [['id', 'ASC']]
      })
      .then(doctors => res.status(201).send(doctors))
      .catch(error => res.status(400).send(error));
  },
};