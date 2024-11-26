// const mongoose = require('mongoose');

// const feedbackSchema = new mongoose.Schema({
//   studentName: { type: String, required: true },
//   teacherName: { type: String, required: true },
//   feedback: { type: String, required: true },
//   date: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Feedback', feedbackSchema);
// In-memory storage for feedbacks
let feedbacks = [];

// Controller function to submit feedback
const submitFeedback = (req, res) => {
  const { teacher, course, feedback } = req.body;
  const feedbackEntry = {
    teacher,
    course,
    feedback,
    date: new Date(),
  };
  feedbacks.push(feedbackEntry);
  res.status(201).json({ message: "Feedback submitted successfully" });
};

// Controller function to get all feedbacks
const getFeedbacks = (req, res) => {
  res.status(200).json(feedbacks);
};

module.exports = { submitFeedback, getFeedbacks };
