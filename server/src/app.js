const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const productsRouter = require("./routes/products.routes");
const userRouter = require("./routes/users.routes");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "..", "public ")));

// Routes
app.use("/products", productsRouter);
app.use("/login", userRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public ", "index.html"));
});

module.exports = app;
