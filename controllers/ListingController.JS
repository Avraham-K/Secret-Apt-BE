const {
  getListingModel,
} = require("../models/ListingModel");

async function getListing(req, res) {
  const { Neighborhood } = req.query;
  try {
    console.log("getting listeings from:", Neighborhood)
    const filteredListing = await getListingModel(Neighborhood);
    console.log(filteredListing.length)
    res.status(200).send(filteredListing);
  } catch (err) {
    res.status(500).send(err);
  }
}


module.exports = { getListing };
