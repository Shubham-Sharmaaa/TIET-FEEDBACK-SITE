import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{marginBottom: "5vh",marginTop:"5vh"}}>TIET FEEDBACK SYSTEM</h1>
      <h6>Choose Your Role to Proceed</h6>
      <div style={{ marginTop: "20px" }}>
        <Link to="/student" style={{ marginRight: "20px" }}>
          <button style={{ padding: "10px 20px", fontSize: "16px" }}>Student</button>
        </Link>
        <Link to="/teacher">
          <button style={{ padding: "10px 20px", fontSize: "16px" }}>Teacher</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
