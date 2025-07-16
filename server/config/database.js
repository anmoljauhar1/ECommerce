const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ecommerce", "root", "Jauhar@786", {
  host: "localhost",
  dialect: "mysql",
  logging: false, // optional: disable SQL logs
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connection has been established successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error.message);
  }
}

testConnection();

module.exports = sequelize;
