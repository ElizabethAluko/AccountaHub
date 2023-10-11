// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './views/About';
import Navigation from './components/Navigation';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import DataDisplay from './components/DataDisplay';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
	  <Route path="/data" element={<DataDisplay />} />
	  <Route path="/login" element={<Login />} />
	  <Route path="/about" element={<About />} />
        </Routes>
	<Footer />
      </div>
    </Router>
  );
}

export default App;
