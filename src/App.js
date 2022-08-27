import Home from './Home';
import { Sessions, Courses, Course } from "./Services"
import { Blogs, BlogView } from "./Blogs"
import Instructor from './Sender/Instructor';
import NewArticle from './Sender/Article';
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
        <Route path="blogs" element={<Blogs />} />
        <Route path="blog" element={<BlogView />} />
        <Route path="instructor" element={<Instructor />} />
        <Route path="new/article" element={<NewArticle />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
