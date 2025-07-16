const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const port = 5000;

app.use(morgan("dev"));
app.use(cors());

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.use("/auth", authRoutes);
app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log("server running at port : 5000");
});
