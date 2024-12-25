const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const clubModel = require("../models/clubModel");

// Create a new club
exports.createClub = async (req, res) => {
  const { username, password, clubname } = req.body;

  // Input validation
  if (!username || !password || !clubname) {
    return res
      .status(400)
      .json({ message: "Username, password and club name are required" });
  }

  try {
    // Check if the user already exists
    const existingUser = await userModel.getUserByUserName(username);
    const existingClub = await clubModel.getClubByClubName(clubname);
    if (existingUser || existingClub) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Hash the password with 12 rounds
    const hashedPassword = await bcrypt.hash(password, 12);

    // Insert the new user into the database
    await userModel.insertUser(username, hashedPassword, "club", clubname);

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
