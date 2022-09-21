const {
  getListingModel,
} = require("../models/ListingModel");

async function getListing(req, res) {
  const { Neighborhood } = req.query;
  try {
    const filteredListing = await getListingModel(Neighborhood);
    res.status(200).send(filteredListing);
  } catch (err) {
    res.status(500).send(err);
  }
}


module.exports = { getListing };
