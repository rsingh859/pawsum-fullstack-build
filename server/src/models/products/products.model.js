const products = require("./products.mongo");

async function getAllProducts() {
  return await products.find({});
}

module.exports = { getAllProducts };
