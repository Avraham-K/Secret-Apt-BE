
const { connection } = require("../mysql");

MYSQL = async (sql) => {
  const rows = await queryDB(sql);
  const myDB = await Object.values(JSON.parse(JSON.stringify(rows)));
  return myDB;
};

function queryDB(sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

async function getListingModel() {
  try {
    const sql = "SELECT * FROM users_database.users_info";
    const SQLusers = await MYSQL(sql);
    return SQLusers;
  } catch (err) {
    console.log(err);
  }
}


module.exports = {
  getListingModel,
};
