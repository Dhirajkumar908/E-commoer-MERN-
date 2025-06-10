const { json } = require("express");
const { User,} = require("../models/userModuls.js");
const { hashPassword } = require("../utility/hashPassword.js");
const { Compare_password } = require("../utility/compare_password.js");
const { generateToken } = require("../middleware/jwt.js");

//Create users
exports.CreateUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return res.status(401).json({ message: "Required fields are missing" });
    }
    const isExist = await User.findOne({ email });
    if (isExist) {
      return res.status(409).json({ message: "User already exist" });
    }
    const hashedPassword = await hashPassword(password);

    const user = await User({ email, password: hashedPassword, role });
    user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

//list all  users
exports.ListUser = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Required fields are missing!" });
    }

    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const match = await Compare_password(password, user.password);

    if (!match) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = generateToken(user);

    const { _id, name } = user;

    return res.status(200).json({
      message: "Login successful!",
      user: { _id, name, email },
      token
    });

  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message
    });
  }
};
