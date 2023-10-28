// client/src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/useAuth';
import Modal from './components/Modal';
import About from './views/About';
import Navigation from './components/Navigation';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import Quotes from './components/Quotes';
import Login from './components/Login';
import Footer from './components/Footer';
// import Team from './components/Team';

function App() {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  return (
   <AuthProvider>
    <Router>
      <div className="App">
        <Navigation openModal={openModal} />
	<Modal isOpen={isModalOpen} onClose={closeModal}>
        <Login onSuccess={closeModal} />
      </Modal>
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
