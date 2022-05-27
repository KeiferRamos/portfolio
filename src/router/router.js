import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Projects from "../pages/projects/Projects";
import Tools from "../pages/tools/Tools";

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
