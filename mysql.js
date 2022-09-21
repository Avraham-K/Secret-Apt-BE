require("dotenv").config();
const mysql = require("mysql");
const MYSQLPASSWORD = process.env.MYSQLPASSWORD;

const connection = mysql.createConnection({
    host: "rds-mysql-pet-adopt.cqv2v701wkty.eu-central-1.rds.amazonaws.com",
    user: "masterUsername",
    password: MYSQLPASSWORD,
    database: "secret_apt",
    port: "3306",
    
  });
  module.exports = {connection};