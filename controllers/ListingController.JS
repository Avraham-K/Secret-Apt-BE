const axios = require('axios');
const {
  getListingModel,
} = require("../models/ListingModel");



// Equivalent to `axios.get('https://httpbin.org/get?answer=42')`

async function addPrice(item) {
  try {
    const params = { params: 
      { GarageYrBlt: item.GarageYrBlt,
        ['2ndFlrSF']: item['2ndFlrSF'],
        TotalBsmtSF: item.TotalBsmtSF,
        GrLivArea: item.GrLivArea,
        ['1stFlrSF']: item['1stFlrSF'],
        GarageArea: item.GarageArea,
        OverallQual: item.OverallQual,
        BsmtUnfSF: item.BsmtUnfSF,
        LotArea: item.LotArea,
        GarageCars: item.GarageCars,
       }
    }
    const res = await axios.get('http://ec2-3-71-74-197.eu-central-1.compute.amazonaws.com:8080/predict', params);
    console.log("WELLLLLLLLLLsfsfafasfasfasfasfsafsafsfasfLL", res.data)
    item.marketValue = +res.data
    return item
  } catch (err) {
    console.log("ERROR", err)
  }
}


async function getEstimatedRealValue(list) {
  console.log("GOT TO ESTIMATED VALUE")
  if (list.length === 0) {
    return []
  }
  const newList = list.map( async (item) => {
    await addPrice(item)
  })
  return list
}

async function getListing(req, res) {
  const Neighborhood = res.locals
  console.log("GOT IT", Neighborhood)
  try {
    console.log("getting listeings from:", Neighborhood)
    const filteredListing = await getListingModel(Neighborhood);
    const augmentedList = await getEstimatedRealValue(filteredListing)
    res.status(200).send(augmentedList);
  } catch (err) {
    res.status(500).send(err);
  }
}


module.exports = { getListing };
