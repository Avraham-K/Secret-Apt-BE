const express = require("express");
const router = express.Router();
const ListingController = require("../controllers/listingController");
const {getUserByEmailModel} = require("../models/usersModel");


router.get("/", ListingController.getListing);


module.exports = router;