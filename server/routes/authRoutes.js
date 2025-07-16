const express = require("express");
const {
  signup,
  login,
  test,
  userDetails,
} = require("../controller/authController");
const route = express.Router();

route.post("/login", login);
route.post("/test", test);
route.post("/signup", signup);

route.get("/user/:id", userDetails);

module.exports = route;
