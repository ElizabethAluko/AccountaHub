// client/src/App.js
// import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/useAuth';
// import Modal from './components/Modal';
import About from './views/About';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import Quotes from './components/Quotes';
import Footer from './components/Footer';

function App() {
  return (
   <AuthProvider>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
	  <Route path="/dashboard" element={<Dashboard />} />
	  <Route path="/data" element={<Quotes />} />
	  <Route path="/about" element={<About />} />
        </Routes>
	<Footer />
      </div>
    </Router>
   </AuthProvider>
  );
}

export default App;
