const express = require("express");
const router = express.Router();
const ListingController = require("../controllers/listingController");
const { NeighborhoodTranslate } = require("../middleware/NeighborhoodTranslate.js");


router.get("/", NeighborhoodTranslate, ListingController.getListing);


module.exports = router;