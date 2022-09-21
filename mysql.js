require("dotenv").config();
const mysql = require("mysql");
const MYSQLPASSWORD = process.env.MYSQLPASSWORD;

const connection = mysql.createConnection({
    host: "sql11.freemysqlhosting.net",
    user: "sql11521265",
    password: MYSQLPASSWORD,
    database: "listing_database",
    port: "3306",
    
  });
  module.exports = {connection};