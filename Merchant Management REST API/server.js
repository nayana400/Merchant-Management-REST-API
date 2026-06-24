const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/categories", require("./routes/categoryRoutes"));

app.use("/api/merchants", require("./routes/merchantRoutes"));



app.get("/hello", (req, res) => {
  res.send("Hello Route");
});

app.get("/", (req, res) => {
  res.send("Merchant Management API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});