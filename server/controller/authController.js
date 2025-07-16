const User = require("../models/user"); // adjust path if needed

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Password check — just a plain comparison (you should use bcrypt in real apps)
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Success
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        // do not send password!
      },
    });
  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const signup = async (req, res) => {
  // signup code
  try {
    const body = req.body;
    console.log(body);
    const user = await User.create(body);
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
  }
};

const test = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users); // ✅ Success response
  } catch (err) {
    console.error(err); // ✅ Log error
    res.status(500).json({ error: "Internal Server Error" }); // ✅ Respond with error
  }
};

const userDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    if (user) {
      return res.json({ user });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = { signup, login, test, userDetails };
