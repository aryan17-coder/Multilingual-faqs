const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FAQ = sequelize.define('FAQ', {
  question_en: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  question_hi: {
    type: DataTypes.STRING,
  },
  question_bn: {
    type: DataTypes.STRING,
  },
  answer: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = FAQ;