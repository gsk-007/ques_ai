import asyncHandler from "express-async-handler";
import { loginSchema } from "../schemas/authSchema.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// @description Auth user
// @route POST /api/auth/login
// @access Public
export const login = asyncHandler(async (req, res) => {
  const value = await loginSchema.validateAsync(req.body, {
    errors: {
      wrap: {
        label: "",
      },
    },
  });
  const { email, password } = value;

  const user = await User.findOne({ email });

  if (!user || !(await user.matchPassword(password))) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  const token = signToken();

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV == "production",
  });

  res.status(200).json({
    success: true,
    user: {
      _id: user._id,
      email: user.email,
      name: user.name,
    },
  });
});

// @description signup user
// @route POST /api/auth/register
// @access Public
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Invalid user credentials");
  }

  const newUser = await User.create({
    name,
    email,
    password,
  });

  const token = signToken(newUser._id);

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV == "production",
  });

  res.status(201).json({
    success: true,
    user: {
      _id: newUser._id,
      email: newUser.email,
      name: newUser.name,
    },
  });
};

// @description Logout User
// @route POST /api/auth/logout
// @access Public
export const logout = async (req, res) => {
  res.clearCookie("jwt");
  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};
