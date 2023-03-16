const path = require("path");
const express = require("express");
const cors = require("cors");

const productsRouter = require("./routes/products.routes");

const { httpGetAllProducts } = require("./models/products/products.controller");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.static(path.join(__dirname, "..", "public ")));

app.get("/", httpGetAllProducts);

// Routes
app.use("/products", productsRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public ", "index.html"));
});

module.exports = app;
