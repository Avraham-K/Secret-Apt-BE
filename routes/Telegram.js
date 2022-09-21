const express = require("express");
const router = express.Router();
const TelegramController = require("../controllers/TelegramController");


router.put("/", TelegramController.postMsg);


module.exports = router;