const leksaker = require("../static-data/leksaks-data");
// const mongo_connection = require("../database/connection");
// const mongoose = require("mongoose");
// const leksak =  require('../database/models/leksak.model');

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request. ROW 3");
  context.log(leksaker.getLeksaker());
  try {
    const leksakerResult = leksaker.getLeksaker();
    context.log(leksakerResult);
    context.res.status(200).json(leksakerResult);
  } catch (error) {
    context.res.status(500).send(error);
  }
  //   context.res = {

  //     // status: 200, /* Defaults to 200 */
  //     body: responseMessage,
  //   };
};
