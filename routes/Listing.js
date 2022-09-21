const express = require("express");
const router = express.Router();
const ListingController = require("../controllers/listingController");


router.get("/", ListingController.getListing);


module.exports = router;