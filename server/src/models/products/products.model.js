const { Product } = require("./products.mongo");

async function getAllProducts() {
  return await Product.find({});
}

module.exports = { getAllProducts };
