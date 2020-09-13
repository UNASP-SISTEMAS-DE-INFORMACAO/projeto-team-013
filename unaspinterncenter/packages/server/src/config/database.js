require("dotenv").config()
module.exports = {
  dialect: process.env.DB_DIALECT || 'mysql',
  username: "root",
  password:"",
  database: "testesequelize",
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
