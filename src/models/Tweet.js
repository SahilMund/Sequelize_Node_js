const Sequelize = require("sequelize");

// sequelize is exported from database/connection.js
// define is a method (<model name>,<schema of the model>)

module.exports = sequelize.define("Tweet", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  content: Sequelize.STRING(300)
});