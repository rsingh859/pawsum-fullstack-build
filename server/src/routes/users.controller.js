const User = require("../models/users/users.mongo");
const bcrypt = require("bcrypt");

async function httpRegisterUser(req, res) {
  const { name, email, password, isAdmin } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        error: "Email already in use",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      isAdmin,
    });

    await newUser.save();
    res.status(200).json({
      message: "Sign up successful",
      responseCode: 200,
      user: await User.findOne(
        { email },
        {
          __v: 0,
          _id: 0,
          password: 0,
        }
      ),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function httpSignIn(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        error: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    res.status(200).json({
      message: "Log in Successful",
      responseCode: 200,
      user: await User.findOne(
        { email },
        {
          __v: 0,
          _id: 0,
          password: 0,
        }
      ),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = {
  httpRegisterUser,
  httpSignIn,
};
