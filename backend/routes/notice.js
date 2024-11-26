// const express = require('express');
// const Notice = require('../models/Notice');
// const router = express.Router();

// // POST notice
// router.post('/', async (req, res) => {
//   const { title, content } = req.body;

//   try {
//     const newNotice = new Notice({ title, content });
//     await newNotice.save();
//     res.status(201).json({ message: 'Notice posted successfully!' });
//   } catch (error) {
//     console.error('Error posting notice:', error);
//     res.status(500).json({ message: 'Error posting notice', error: error.message });
//   }
// });
// router.get('/', async (req, res) => {
//     try {
//       const notices = await Notice.find().sort({ date: -1 });
//       res.status(200).json(notices);
//     } catch (err) {
//       res.status(500).json({ message: 'Error fetching notices', error: err.message });
//     }
//   });
  

// module.exports = router;
// const express = require('express');
// const router = express.Router();

// let notices = []; // Replace with database later if needed
// let feedbacks = []; // Replace with database later if needed

// router.post('/', (req, res) => {
//     const { title, content } = req.body;
  
//     if (!title || !content) {
//       return res.status(400).json({ message: 'Title and content are required.' });
//     }
  
//     const newNotice = { id: Date.now(), title, content };
//     notices.push(newNotice); // Add notice to the array
//     res.status(201).json({ message: 'Notice posted successfully!', notice: newNotice });
//   });
  

// // GET all notices
// router.get('/', (req, res) => {
//   res.status(200).json(notices);
// });

// module.exports = router;
const express = require("express");
const router = express.Router();

// Import controller functions
const { postNotice, getNotices } = require("../controllers/noticeController");

// Routes for notices
router.post("/notices", postNotice);
router.get("/notices", getNotices);

module.exports = router;
