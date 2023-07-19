import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Routes,
} from 'react-router-dom';
import Home from './component/Home';
import Calculator from './component/calculator';
import QuoteComponent from './component/fetchquotes';

const AppRouter = () => (
  <Router>
    <nav className="navbar">
      <h1>Math Magicicians</h1>
      <ul className="list-con ">
        <li className="">
          <Link to="/">Home</Link>
        </li>
        <li className="">
          <Link to="/calculator">Calculator</Link>
        </li>
        <li className="">
          <Link to="/quote">Quote</Link>
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
