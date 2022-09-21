const {
  getListingModel,
} = require("../models/ListingModel");

async function getListing(req, res) {
  try {
    const allListing = await getListingModel();
    res.status(200).send(allListing);
  } catch (err) {
    res.status(500).send(err);
  }
}


module.exports = { getListing };
