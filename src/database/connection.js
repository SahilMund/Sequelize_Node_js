// connection establishing between sequalize and the local database server
const Sequelize = require("sequelize");

const sequelize = new Sequelize("socialnetwork", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  operatorsAliases: 0,
});

module.exports = sequelize;
// globally exporting
global.sequelize = sequelize;
