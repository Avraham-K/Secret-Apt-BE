const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

const PORT = process.env.PORT || 8080;
const Listing = require("./routes/Listing");
const Telegram = require("./routes/Telegram");

const cors = require("cors");
app.use(cors());

app.use("/Listing", Listing);
app.use("/Telegram", Telegram);

app.get("*", (req, res) => {
  res.status(404).send("Page Not Fount");
});

const {connection} = require("./mysql");
connection.connect(() => {
  console.log("MySQL on AWS connected as id " + connection.threadId);
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
