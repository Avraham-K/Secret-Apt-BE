const {
    postMsgModel,
  } = require("../models/TelegramModel");
  
  async function postMsg(req, res) {
    try {
      const allListing = await postMsgModel();
      res.status(200).send(allListing);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  
  
  module.exports = { postMsg };
  