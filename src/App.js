import Home from './Home';
import { Sessions, Courses, Course } from "./Services"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sessions" element={<Sessions />} />
        <Route path="courses" element={<Courses />} />
        <Route path="course" element={<Course />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
