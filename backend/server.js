

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/portfolio")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Contact message schema
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true
    },
    message: {
      type: String,
      required: true,
      trim: true
    }
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

// Home route
app.get("/", (req, res) => {
  res.send("Portfolio backend is running!");
});

// Test route
app.get("/api/test", (req, res) => {
  res.json({
    message: "Frontend connected to backend successfully!"
  });
});

// Save contact form messages
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        message: "Please fill in all fields."
      });
    }

    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();

    res.status(201).json({
      message: "Your message was saved successfully!"
    });
  } catch (err) {
    console.error("Contact save error:", err);
    res.status(500).json({
      message: "Could not save your message."
    });
  }
});

// Start server after MongoDB connects
mongoose.connection.once("open", () => {
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
});