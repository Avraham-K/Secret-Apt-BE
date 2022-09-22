const axios = require("axios");
const { getListingModel, getAdvancedSearch } = require("../models/ListingModel");

// Equivalent to `axios.get('https://httpbin.org/get?answer=42')`

async function addPrice(item) {
  try {
    const params = {
      params: {
        YearRemodAdd: item.YearRemodAdd,
        ["2ndFlrSF"]: item["2ndFlrSF"],
        TotalBsmtSF: item.TotalBsmtSF,
        GrLivArea: item.GrLivArea,
        ["1stFlrSF"]: item["1stFlrSF"],
        GarageArea: item.GarageArea,
        OverallQual: item.OverallQual,
        LotArea: item.LotArea,
        GarageCars: item.GarageCars,
        YearBuilt: item.YearBuilt,
        TotRmsAbvGrd: item.TotRmsAbvGrd,
        BldgType: item.BldgType,
        Neighborhood: item.Neighborhood,
      },
    };
    const res = await axios.get(
      "http://ec2-3-71-74-197.eu-central-1.compute.amazonaws.com:8080/predict",
      params
    );
    console.log(res.data)
    item.marketValue = Math.round(+res.data);
    return item;
  } catch (err) {
    console.log("ERROR", err);
  }
}

async function getEstimatedRealValue(list) {
  let newList = [];
  await Promise.all(
    list.map(async (item) => {
      const newItem = await addPrice(item);
      console.log(newItem);
      newList.push(newItem);
    })
  );
  console.log("MYNEWLIST", newList);
  return newList;
}

async function getListing(req, res) {
  const Neighborhood = res.locals;
  console.log("GOT IT", Neighborhood);
  try {
    const filteredListing = await getListingModel(Neighborhood);
    console.log("ISIT EMPTY", filteredListing.length);
    const augmentedList = await getEstimatedRealValue(filteredListing);
    res.status(200).send(augmentedList);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function search(req, res) {
  try {
    const filteredListing = await getAdvancedSearch(req.body);
    res.status(200).send(filteredListing);
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = { getListing, search };
