import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Routes,
} from 'react-router-dom';
import Home from './component/Home';
import Calculator from './component/calculator';
import QuoteComponent from './component/fetchquotes';

const linkStyles = {
  color: 'black',
  textDecoration: 'none',
  paddingRight: '10px',
  borderRight: '2px solid black',
};

const linkStyles1 = {
  color: 'black',
  textDecoration: 'none',
};
const AppRouter = () => (
  <Router>
    <nav className="navbar">
      <h2>Math Magicicians</h2>
      <ul className="list-con ">
        <li className="">
          <Link style={linkStyles} to="/">
            Home
          </Link>
        </li>
        <li className="">
          <Link style={linkStyles} to="/calculator">
            Calculator
          </Link>
        </li>
        <li className="">
          <Link style={linkStyles1} to="/quote">
            Quote
          </Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<QuoteComponent />} />
    </Routes>
  </Router>
);

export default AppRouter;
