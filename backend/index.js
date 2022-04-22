const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookiePraser = require("cookie-parser");
const authRoute = require("./Route/auth")
const userRoute = require("./Route/user");

dotenv.config();

const app = express();

mongoose.connect(process.env.DB_URL, ()=>{
    console.log("Connected to Database");
});
app.use(cors());
app.use(cookiePraser());
app.use(express.json());


//ROUTE
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);

app.listen(8000, () => {
    console.log("server is running");
});


//Authentication

//Authorization //Phân quyền