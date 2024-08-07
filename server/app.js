const express = require("express");
const connectDB = require("./config/Database");
const dotenv = require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const app = express();
connectDB();

app.use(express.json());
app.use(cors());


//Routes 
app.use("/api/user", require("./Admin/routes/userRoutes"));
app.use("/api/admin", require("./Admin/routes/adminRoutes"));
app.use("/api/menu", require("./Admin/routes/menuRoutes"));
app.use("/api/category", require("./Admin/routes/categoryRoutes"));



app.listen(PORT, () => {
  console.log("listening on port", PORT);
});

module.exports = app;