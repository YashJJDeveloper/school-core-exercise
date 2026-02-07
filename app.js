const express = require("express");
const app = express();
const campusRoutes = require("./src/routes/campus.routes.js");
require("dotenv").config();

app.use(express.json());
app.use("/campus", campusRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});