import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import StudentPage from "./components/StudentPage";
import TeacherPage from "./components/TeacherPage";
const path = require('path');

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/teacher" element={<TeacherPage />} />
      </Routes>
    </div>
  );
};

export default App;
