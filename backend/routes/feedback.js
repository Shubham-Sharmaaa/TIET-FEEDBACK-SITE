// const express = require('express');
// const Feedback = require('../models/Feedback');
// const router = express.Router();

// router.post('/', async (req, res) => {
//   const { studentName, teacherName, feedback } = req.body;
//   try {
//     const newFeedback = new Feedback({ studentName, teacherName, feedback });
//     await newFeedback.save();
//     res.status(201).json({ message: 'Feedback submitted successfully!' });
//   } catch (err) {
//     res.status(500).json({ message: 'Error submitting feedback', error: err.message });
//   }
// });
// router.get('/', async (req, res) => {
//     try {
//       const feedback = await Feedback.find().sort({ date: -1 });
//       res.status(200).json(feedback);
//     } catch (err) {
//       res.status(500).json({ message: 'Error fetching feedback', error: err.message });
//     }
//   });
  
// module.exports = router;
// const express = require('express');
// const router = express.Router();

// let feedbacks = []; // Replace with database later if needed

// // POST new feedback
// router.post('/', (req, res) => {
//   const { studentName, teacherName, feedback } = req.body;
//   const newFeedback = { id: Date.now(), studentName, teacherName, feedback };
//   feedbacks.push(newFeedback);
//   res.status(201).json(newFeedback);
// });

// // GET all feedbacks
// router.get('/', (req, res) => {
//   res.status(200).json(feedbacks);
// });

// module.exports = router;
const express = require("express");
const router = express.Router();

// Import controller functions
const { submitFeedback, getFeedbacks } = require("../controllers/feedbackController");

// Routes for feedback
router.post("/feedback", submitFeedback);
router.get("/feedback", getFeedbacks);

module.exports = router;
