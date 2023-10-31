import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Portfolio from './Portfolio';
import Projects from './Projects';
import Menu from './Menu';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
