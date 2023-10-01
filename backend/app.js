const express = require("express");
const app = express();

const dotenv = require("dotenv");

const connectDB = require("./config/database");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

//setting up config.env file variables
dotenv.config({ path: "./config/config.env" });

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(cors());

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`Server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});

// handling unhandling promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
