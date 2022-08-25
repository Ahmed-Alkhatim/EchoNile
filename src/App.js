import Home from './Home';
import Service from './Sessions';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sessions" element={<Service />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
