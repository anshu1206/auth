const Quote = require("../models/quote.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config()

const getQuote = async (req, res) => {
  const token = req.headers["x-access-token"];
  if(!token){
    return res.status(404).json({message : "token not provided"})
  }
  const decode = jwt.verify(token, process.env.JWT_SCREAT);
  const id = decode.id;
  try {
    // if (!author) {
    //   return res.status(400).json({ message: "Author parameter is required" });
    // }
    const quotes = await Quote.find({ author :  id });
    if (quotes.length === 0) {
      return res
        .status(404)
        .json({ message: "No quotes found for this author" });
    }
    res.status(200).json({ quotes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
const postQuote = async (req, res) => {
  try {
    const { quote, author } = req.body;
    const newUser = new Quote({ quote, author });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: "Error post user" });
    console.log(err);
  }
};
module.exports = { postQuote, getQuote };
