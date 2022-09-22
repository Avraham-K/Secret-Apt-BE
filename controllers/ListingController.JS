const axios = require("axios");
const { getListingModel } = require("../models/ListingModel");

// Equivalent to `axios.get('https://httpbin.org/get?answer=42')`

async function addPrice(item) {
  try {
    const params = {
      params: {
        GarageYrBlt: item.GarageYrBlt,
        ["2ndFlrSF"]: item["2ndFlrSF"],
        TotalBsmtSF: item.TotalBsmtSF,
        GrLivArea: item.GrLivArea,
        ["1stFlrSF"]: item["1stFlrSF"],
        GarageArea: item.GarageArea,
        OverallQual: item.OverallQual,
        BsmtUnfSF: item.BsmtUnfSF,
        LotArea: item.LotArea,
        GarageCars: item.GarageCars,
      },
    };
    const res = await axios.get(
      "http://ec2-3-71-74-197.eu-central-1.compute.amazonaws.com:8080/predict",
      params
    );
    item.marketValue = Number(res.data);
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

module.exports = { getListing };
