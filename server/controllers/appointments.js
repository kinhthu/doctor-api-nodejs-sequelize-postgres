const { Appointment } = require('../models');

module.exports = {
    // Create 
  create(req, res) {
    return Appointment
      .create({
        start: req.body.start,
        end: req.body.end,
      })
      .then(appointment => res.status(201).send(appointment))
      .catch(error => res.status(400).send(error));
  },

  // Update
  update(req, res) {
    return Appointment
      .update({
        start: req.body.start,
        end: req.body.end,
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
    return Appointment
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
    return Appointment
      .all({
          order: [['id', 'ASC']]
      })
      .then(appointments => res.status(201).send(appointments))
      .catch(error => res.status(400).send(error));
  },
};