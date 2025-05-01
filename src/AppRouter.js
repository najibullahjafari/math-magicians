import React, { useState } from 'react';
import {
  BrowserRouter as Router, Route, Link, Routes,
} from 'react-router-dom';
import Home from './component/Home';
import Calculator from './component/calculator.jsx';
import QuoteComponent from './component/fetchquotes';
import './css/navbar.css';
import Footer from './component/Footer.jsx';
import ExchangeRateComponent from './component/Exchange_Rate.jsx';
import NutritionComponent from './component/NutritionComponent.jsx';
import BarcodeGenerator from './component/BarcodeGeneretor.jsx';

const AppRouter = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when a link is clicked (mobile UX)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-brand">
          <span role="img" aria-label="magic">✨</span>
          <h2>Math Magicians</h2>
          <button
            className="navbar-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="navbar-hamburger">&#9776;</span>
          </button>
        </div>
        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          <li>
            <Link className="nav-link" to="/" onClick={handleLinkClick}>Home</Link>
          </li>
          <li>
            <Link className="nav-link" to="/calculator" onClick={handleLinkClick}>Calculator</Link>
          </li>
          <li>
            <Link className="nav-link" to="/quote" onClick={handleLinkClick}>Quote</Link>
          </li>
          <li>
            <Link className="nav-link" to="/exchangeRate" onClick={handleLinkClick}>Exchange Rate</Link>
          </li>
          <li>
            <Link className="nav-link" to="/nutrition" onClick={handleLinkClick}>Nutrition</Link>
          </li>
          <li>
            <Link className="nav-link" to="/barcode" onClick={handleLinkClick}>Barcode</Link>
          </li>
        </ul>
      </nav>
      <Routes className="routes">
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<QuoteComponent />} />
        <Route path="/exchangeRate" element={<ExchangeRateComponent />} />
        <Route path="/nutrition" element={<NutritionComponent />} />
        <Route path="/barcode" element={<BarcodeGenerator />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;