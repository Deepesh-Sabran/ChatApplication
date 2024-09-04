const express = require("express");
const UserModel = require("../modals/userModal");
const generateToken = require("../Config/generateToken");
const expressAsyncHandler = require("express-async-handler");
// Login...
const loginController = expressAsyncHandler(async (req, res) => {
  const { name, password } = req.body;
  const user = await UserModel.findOne({ name });
  console.log(user);

  if (user && (await user.matchPassword(password))) {
    // modified
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json("Invalid userName or password");
  }
});

// Register...
const registerController = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  // Check if email already exists
  const userExists = await UserModel.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // user name is already in use
  const existingUser = await UserModel.findOne({ name });
  if (existingUser) {
    return res.status(400).json({ message: "User already taken" });
  }

  // create new user in the database
  const newUser = await UserModel.create({
    name,
    email,
    password,
  });

  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: generateToken(newUser._id),
    });
  } else {
    res.status(404);
    throw new Error("Registration Error");
  }
});

module.exports = { loginController, registerController };
