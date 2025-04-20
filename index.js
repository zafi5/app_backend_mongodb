const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRoutes = require("./routes/product_routes.js");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route
app.use("/api/products", productRoutes);

//
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to CRUD_API");
});

mongoose
  .connect(
    ""
  )
  .then(() => {
    console.log("Connected to DB!");
    app.listen(PORT, (req, res) => {
      console.log(`Server is listening to Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
