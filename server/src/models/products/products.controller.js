const { getAllProducts } = require("./products.model");

const { Product } = require("./products.mongo");

async function httpGetAllProducts(req, res) {
  return res.status(200).json(await getAllProducts());
}

async function httpAddProduct(req, res) {
  const product = new Product(req.body);
  try {
    await product.save().then((result) => {
      console.log(`Product saved successfully`);
    });
    return res.status(201);
  } catch (err) {
    console.log("Error saving product", err);
    res.status(500).json({
      error: "Error saving Product",
    });
  }
}

module.exports = {
  httpGetAllProducts,
  httpAddProduct,
};
