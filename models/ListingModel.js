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

async function getAdvancedSearch(searchObj) {
  try {
    const entries = Object.entries(searchObj) 
    let where = ""
    if(entries.length === 1) {
      console.log("YAY")
      where = `Where ${entries[0][0]} = ${entries[0][1]} `
    }
    if(Object.entries(searchObj).length > 1) {
      console.log("YAY")
      where = `Where ${Object.entries(searchObj)[0][0]} = ${Object.values(searchObj)[0][1]}`
      for (let i = 0; i < entries.length; i++) {
          where += ` AND ${entries[i][0]} = ${entries[i][1]}`
      }
      
      console.log(where)
      
    }
    const sql = `SELECT * FROM secret_apt.secret_apt ${where}`;
    const filteredListing = await MYSQL(sql);
    return filteredListing;
  } catch (err) {
    console.log(err);
  }
}




module.exports = {
  getListingModel,
  getAdvancedSearch,
};
