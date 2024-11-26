const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const path = require('path');
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI || "mongodb://[2402:8100:2b13:de73:8d32:6302:f2fc:a0ba]:27017/myDatabase";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());

// Mock data
let notices = [];
let feedbacks = [];

// Routes for Teacher
app.post("/teacher/notices", (req, res) => {
  const { title, description } = req.body;
  const notice = { title, description, date: new Date() };
  notices.push(notice);
  res.status(201).json({ message: "Notice posted successfully!" });
});

app.get("/teacher/feedback", (req, res) => {
  res.status(200).json(feedbacks);
});

// Routes for Student
app.post("/student/feedback", (req, res) => {
  const { teacher, course, feedback } = req.body;
  const feedbackData = { teacher, course, feedback, date: new Date() };
  feedbacks.push(feedbackData);
  res.status(201).json({ message: "Feedback submitted successfully!" });
});

app.get("/student/notices", (req, res) => {
  res.status(200).json(notices);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
