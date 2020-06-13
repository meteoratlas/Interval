const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const compression = require("compression");

const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
const AppError = require("./utils/appError");

const API_VERSION = 1;

const app = express();
app.enable("trust proxy");

// Access-Control-Allow-Origin
app.use(cors());
app.options("*", cors()); // preflight phase

// set secure HTTP headers
app.use(helmet());

app.use(bodyParser.json());

const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    // 100 reqs per hour
    message: "Too many requests from this IP; please try again later.",
});
app.use("/api", limiter);

// body parser
app.use(
    express.json({
        limit: "10kb", // req bodies larger than 10kb not accepted
    })
);

app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// data sanitization (NoSQL query injection)
app.use(mongoSanitize());
// data sanitization (XSS)
app.use(xss());

app.use(compression());

app.use(`/api/v${API_VERSION}/users`, userRouter);
app.use(`/api/v${API_VERSION}/posts`, postRouter);

app.all("*", (req, res, next) => {
    // passing an argument to next() always tells express there was an error
    next(
        new AppError(
            `The url ${req.originalUrl} was not found on this server.`,
            404
        )
    );
});

// const db = mongoose.connection;
// db.on("Error: ", (error) => console.warn(error));

module.exports = app;
