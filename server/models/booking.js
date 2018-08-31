'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    serviceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    appointmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.Doctor, {
      foreignKey: 'doctorId',
      onDelete: 'CASCADE',
    });
    Booking.belongsTo(models.Service, {
      foreignKey: 'serviceId',
      onDelete: 'CASCADE',
    });
    Booking.belongsTo(models.Appointment, {
      foreignKey: 'appointmentId',
      onDelete: 'CASCADE',
    });
  };
  return Booking;
};