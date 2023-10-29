import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;