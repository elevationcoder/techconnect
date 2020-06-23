const express = require("express");

const connectDB = require("./config/db");

const app = express();

// connect to database

connectDB();

app.get("/", (req, res) => res.send("API Running"));

// define routes
app.use("/api/users", require("./routes/api/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
