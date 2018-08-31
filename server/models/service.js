'use strict';
module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: false,
    },
    price: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  }, {});
  Service.associate = function(models) {
    // associations can be defined here
    Service.hasMany(models.Booking, {
      foreignKey: 'serviceId',
      as: 'bookings',
    })
  };
  return Service;
};