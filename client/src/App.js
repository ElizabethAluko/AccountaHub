// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import Home from './views/Home';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
	<Landing />
      </div>
    </Router>
  );
}

export default App;
