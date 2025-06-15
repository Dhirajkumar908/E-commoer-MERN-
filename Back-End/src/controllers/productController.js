const { Product } = require("../models/productModel.js");
const validator = require("validator");
const upload = require("../middleware/multerConfig.js");

exports.addProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    const image = req.file ? req.file.path : null;

    console.log(req.body);

    // Validate required fields
    if (!name || !price || !description || !category) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    // Validate input formats
    if (typeof name !== "string" || name.trim().length < 3) {
      return res
        .status(400)
        .json({ message: "Name must be a string with at least 3 characters" });
    }
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      return res
        .status(400)
        .json({ message: "Price must be a positive number" });
    }
    if (typeof description !== "string" || description.trim().length < 10) {
      return res
        .status(400)
        .json({
          message: "Description must be a string with at least 10 characters",
        });
    }
    if (typeof category !== "string") {
      return res
        .status(400)
        .json({
          message:
            "Invalid category. Must be one of: electronics, clothing, books",
        });
    }

    // Create and save product
    const product = new Product({
      name: name.trim(),
      price: parsedPrice,
      description: description.trim(),
      category: category.trim().toLowerCase(),
      image,
    });

    await product.save();

    return res
      .status(201)
      .json({ message: "Product added successfully", product });
  } catch (error) {
    // Handle duplicate key error
    if (error.code === 11000) {
      return res
        .status(409)
        .json({ message: "Product with this name already exists" });
    }
    // Handle file upload errors
    if (error.message.includes("Only JPEG, PNG, and GIF images are allowed")) {
      return res.status(400).json({ message: error.message });
    }
    if (error.code === "LIMIT_FILE_SIZE") {
      return res
        .status(400)
        .json({ message: "Image file size exceeds 5MB limit" });
    }

    console.error("Error adding product:", error.message);
    return res
      .status(500)
      .json({ message: "Server error, please try again later" });
  }
};

exports.addProductWithUpload = [upload.single("image"), exports.addProduct];

exports.UpdateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, category } = req.body;
    const image = req.file ? req.file.path : null;
    console.log(id);
    // console.log(UpdatedProduct);

    if (!id) {
      return res.status(400).json({ message: "Required fields missing" });
    }
    if(!image){
        await Product.findByIdAndUpdate(id, {name:name, price:price, description:description, category:category});
        return res.status(201).json({ message: "User Updated successfuly" });
    }
    await Product.findByIdAndUpdate(id, {name:name, price:price, description:description, category:category, image:image});
    return res.status(201).json({ message: "User Updated successfuly" });
  } catch (e) {
    return res.status(404).json({ Message: e.message });
  }
};


exports.UpdateProductWithUpload = [upload.single("image"), exports.UpdateProduct];


exports.ListProducts=async (req, res)=>{
    try{
        const products= await Product.find();
        return res.status(200).json(products)

    }catch (e) {
    return res.status(404).json({ Message: e.message });
  }
}