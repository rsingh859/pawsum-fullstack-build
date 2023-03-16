const { getAllProducts } = require("./products.model");

const products = require("./products.mongo");

// const payload = {
//   name: "A leash with some fancy collar",
//   description: "some random description",
//   price: "350",
//   image:
//     "https://images.unsplash.com/photo-1675802304727-5f045dd07f84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTIwMzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzgyODIyNzg&ixlib=rb-4.0.3&q=80&w=1080",
//   category: "Leash",
//   brand: "Pawsum",
//   inventory: 20,
// };

async function httpGetAllProducts(req, res) {
  return res.status(200).json(await getAllProducts());
}

async function httpAddProduct(req, res) {
  const product = new products(req.body);
  try {
    await product.save().then((result) => {
      console.log(`Product saved successfully ${result}`);
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
