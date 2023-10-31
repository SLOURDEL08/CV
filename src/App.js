import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './About';
import Portfolio from './Portfolio';
import Projects from './Projects';
import Menu from './Menu';
import './mediaqueries.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/" element={<Navigate to="/portfolio" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
