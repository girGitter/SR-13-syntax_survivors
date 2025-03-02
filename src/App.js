import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      {/* Other Routes will be added later */}
    </Router>
  );
};

export default App;
