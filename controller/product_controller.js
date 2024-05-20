const Product = require("../models/product.model.js");

//get all product
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get product by id
const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.status(200).json(product);
};

//create product
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: "product not found!" });
    }
    const updatedproduct = await Product.findById(id);
    res.status(200).json(updatedproduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete product
const deteletedProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404).json("Product Not Found!");
    }
    res.status(500).json("Product deleted sucessfully!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deteletedProduct,
};
