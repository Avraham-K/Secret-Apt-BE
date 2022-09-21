
// const { connection } = require("../mysql");

// MYSQL = async (sql) => {
//   const rows = await queryDB(sql);
//   const myDB = await Object.values(JSON.parse(JSON.stringify(rows)));
//   return myDB;
// };

// function queryDB(sql) {
//   return new Promise((resolve, reject) => {
//     connection.query(sql, (err, result) => {
//       if (err) reject(err);
//       else resolve(result);
//     });
//   });
// }

async function postMsgModel() {
  try {
    const sql = "SELECT * FROM sql11521265.listing_database";
    // const SQLusers = await MYSQL(sql);
    return true;

  } catch (err) {
    console.log(err);
  }
}


module.exports = {
    postMsgModel,
};
