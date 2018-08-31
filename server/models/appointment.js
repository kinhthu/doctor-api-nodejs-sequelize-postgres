'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    start: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {});
  Appointment.associate = function(models) {
    Appointment.hasMany(models.Booking, {
      foreignKey: 'appointmentId',
      as: 'bookings',
    })
  };
  return Appointment;
};