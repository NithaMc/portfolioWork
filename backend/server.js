const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Portfolio backend is running!");
});

app.get("/api/test", (req, res) => {
    res.json({
        message: "Frontend connected to backend successfully!"
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
