const users = require("../Models/userSchema");
exports.register = async (req, res) => {
  // store the user details to DB
  console.log("inside user registration controller");

  const { username, email, password } = req.body;
  // const email = req.body.email

  // check emailid present or not
  const existingUser = await users.f
  if (existingUser) {
    res.status(400).json("registration request recieved");
  } else {
    res.status(400).json("registration request recieved");

  }
};
exports.getUserDetails = (req, res) => {
  res.status(200).json("inside get user controller");
};
