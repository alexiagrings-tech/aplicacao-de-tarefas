import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";

const App = () => {
  return (
    <Router>
      <TaskProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>
      </TaskProvider>
    </Router>
  );
};

export default App;
