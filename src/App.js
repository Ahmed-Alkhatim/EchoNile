import Home from './Home';
import { Sessions, Courses, Course, Conferences, Conference, Events, Event, Workshops, Workshop   } from "./Services"
import { Blogs, BlogView } from "./Blogs"
import Instructor from './Sender/Instructor';
import NewArticle from './Sender/Article';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";


import './App.css';
import { useEffect } from 'react';

function App() {
  return (
    <div  className="App" >
      <Router>
      <Scroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sessions" element={<Sessions />} />
        <Route path="courses" element={<Courses />} />
        <Route path="course" element={<Course />} />
        <Route path="conferences" element={<Conferences />} />
        <Route path="conference" element={<Conference />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blog/:id" element={<BlogView />} />
        <Route path="events" element={<Events />} />
        <Route path="event" element={<Event />} />
        <Route path="workshops" element={<Workshops />} />
        <Route path="workshop" element={<Workshop />} />
        <Route path="instructor" element={<Instructor />} />
        <Route path="new/article" element={<NewArticle />} />
      </Routes>
      </Router>
    </div>
  );
}

const Scroll = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname]);
  return null
}

export default App;
