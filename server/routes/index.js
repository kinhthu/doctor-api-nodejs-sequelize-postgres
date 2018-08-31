const doctorsController = require('../controllers').doctors;
const servicesController = require('../controllers').services;
const appointmentsController = require('../controllers').appointments;
const bookingsController = require('../controllers').bookings;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Doctors API!',
  }));

  // Doctors
  app.post('/api/doctors', doctorsController.create);
  app.post('/api/doctors/update/:id', doctorsController.update);
  app.post('/api/doctors/delete/:id', doctorsController.delete);
  app.get('/api/doctors', doctorsController.list);

  // Services
  app.post('/api/services', servicesController.create);
  app.post('/api/services/update/:id', servicesController.update);
  app.post('/api/services/delete/:id', servicesController.delete);
  app.get('/api/services', servicesController.list);

  // Appointments
  app.post('/api/appointments', appointmentsController.create);
  app.post('/api/appointments/update/:id', appointmentsController.update);
  app.post('/api/appointments/delete/:id', appointmentsController.delete);
  app.get('/api/appointments', appointmentsController.list);

  // Bookings
  app.post('/api/bookings', bookingsController.create);
  app.post('/api/bookings/update/:id', bookingsController.update);
  app.post('/api/bookings/delete/:id', bookingsController.delete);
  app.get('/api/bookings', bookingsController.list);
  app.post('/api/bookings/book', bookingsController.book);
  app.get('/api/bookings/bookeds/:username', bookingsController.bookedList);
};