const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  } ,
  brand: {
    type: String,
    required: true
  },
  inventory: {
    type: Number,
    required: true
  },  
});

module.exports = mongoose.model('Product', productsSchema);

