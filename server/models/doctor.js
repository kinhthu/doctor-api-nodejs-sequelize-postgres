'use strict';
module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define('Doctor', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Doctor.associate = function(models) {
    Doctor.hasMany(models.Booking, {
      foreignKey: 'doctorId',
      as: 'bookings',
    })
  };
  return Doctor;
};