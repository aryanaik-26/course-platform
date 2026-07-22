const express = require("express");
const cors = require("cors");
const requestRoutes = require("./routes/requestRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();
const homeRoutes = require("./routes/homeRoutes");

app.use("/api/home", homeRoutes);
app.use(cors());
app.use(express.json());
app.use("/api/requests", requestRoutes);
app.get("/", (req, res) => {
  res.send("SkillForge API Running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
module.exports = app;