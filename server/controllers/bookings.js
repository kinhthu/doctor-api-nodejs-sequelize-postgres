const { Booking, Service, Doctor, Appointment } = require('../models');

module.exports = {
    // Create 
  create(req, res) {
    return Booking
      .create({
        username: req.body.username,
        serviceId: req.body.serviceId,
        doctorId: req.body.doctorId,
        appointmentId: req.body.appointmentId,
      })
      .then(booking => res.status(201).send(booking))
      .catch(error => res.status(400).send(error));
  },

  // Update
  update(req, res) {
    return Booking
      .update({
        username: req.body.username,
        serviceId: req.body.serviceId,
        doctorId: req.body.doctorId,
        appointmentId: req.body.appointmentId,
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
    return Booking
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
    return Booking
      .all({
          order: [['id', 'ASC']]
      })
      .then(booking => res.status(201).send(booking))
      .catch(error => res.status(400).send(error));
  },

  // Book
    async book(req, res) {
        try {
            const { username, bookingList } = req.body;
        
            bookingList.forEach(async (i) => {
                await Booking.create({
                    username,
                    serviceId: i.id,
                    doctorId: i.doctor,
                    appointmentId: i.appointment,
                })
            });
            res.status(201).send('Booking successful!');
        } catch(err) {
            res.status(400).send(error);
        }
    },

    // Booked list
    async bookedList(req, res) {
        try {
            const { username } = req.params;

            const bookeds = await Booking.findAll({
                where: { username }
            })

            const result = [];

            for(const i of bookeds){
                const service = await Service.findOne({ where: {id: i.serviceId}})
                const doctor = await Doctor.findOne({ where: {id: i.doctorId}})
                const apppointment = await Appointment.findOne({ where: {id: i.appointmentId}})
                
                const newItem = {
                    id: i.id,
                    service,
                    doctor,
                    apppointment,
                };
                result.push(newItem);
            }
            
            res.status(201).send(result);
        } catch(err) {
            res.status(400).send(error);
        }
    },
};