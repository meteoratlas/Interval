const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

// global exception safety net
process.on("unhandledRejection", (error) => {
    console.warn("Unhandled Rejection - shutting down.");
    server.close(() => {
        // 1 == uncaught exception
        process.exit(1);
    });
});

if (process.env.NODE_ENV !== "development") {
    process.on("uncaughtException", (error) => {
        console.warn("Unhandled Exception - shutting down.");
        server.close(() => {
            // 1 == uncaught exception
            process.exit(1);
        });
    });
}

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.MONGODD_PASS);
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connection successful.");
    });

const port = 3001;
const server = app.listen(port);
