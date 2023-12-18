import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./Portfolio";
import Projects from "./Projects";
import Menu from "./Menu";
import "./mediaqueries.css";
import modalsData from "./modals/modalsData"; // Importez les données modales depuis le nouveau fichier

function preloadImages(modals) {
  modals.forEach((modal) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = modal.imageSrc;
    document.head.appendChild(link);
  });
}

function App() {
  const modalsArray = Object.values(modalsData);

  useEffect(() => {
    preloadImages(modalsArray);
  }, []); // le tableau vide en second argument assure que cela se produit une seule fois au montage

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
