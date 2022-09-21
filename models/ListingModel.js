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

async function getListingModel(Neighborhood) {
  try {
    const sql = `SELECT * FROM secret_apt.secret_apt Where Neighborhood = "${Neighborhood}" `;
    const filteredListing = await MYSQL(sql);
    return filteredListing;
  } catch (err) {
    console.log(err);
  }
}


module.exports = {
  getListingModel,
};
