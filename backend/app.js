const express = require("express");
const app = express();

const dotenv = require("dotenv");

const connectDB = require("./config/database");
const errorMiddleware = require("./middlewares/errors");
const ErrorHandler = require("./utils/errorHandler");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//setting up config.env file variables
dotenv.config({ path: "./config/config.env" });

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));

// setup body parser
app.use(express.json());

app.use(cookieParser());
app.use(cors());

const auth = require("./routes/auth");
const user = require("./routes/user");

app.use("/api/v1", auth);
app.use("/api/v1", user);

// handling unhandled routes
app.all("*", (req, res, next) => {
  next(new ErrorHandler(`${req.originalUrl} route not found`, 404));
});

// middleware to handle erro
app.use(errorMiddleware);

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
