
//importing modules
const express = require("express");
const cors = require("cors");
const path  = require("path")
const sequelize = require("sequelize");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const db = require("./models");
const userRoutes = require("./Routes/userRoute");
const productRouter = require("./Routes/Product");
//setting up your port
const PORT = process.env.PORT || 8080;

//assigning the variable app to express
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//synchronizing the database and forcing it to false so we dont lose data
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("db has been re sync");
// });
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
//routes for the user API
app.use("/users", userRoutes);
app.use("/products", productRouter);
app.use(cookieParser());

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}.`);
  });
});
