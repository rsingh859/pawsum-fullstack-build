const express = require("express");

const { httpAddProduct, httpGetAllProducts } = require('../models/products/products.controller')

const productsRouter = express.Router();

productsRouter.post("/add-product/:payload", httpAddProduct)
productsRouter.get("/", httpGetAllProducts)
// productsRouter.post("/:id", httpDeleteProduct)

module.exports = productsRouter