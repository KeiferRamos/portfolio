import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Tools from "../pages/Tools";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/tools" element={<Tools />} />
    </Routes>
  );
}

export default Router;
