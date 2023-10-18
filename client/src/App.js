// client/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/useAuth';
import Modal from './components/Modal';
import About from './views/About';
import Navigation from './components/Navigation';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import Quotes from './components/Quotes';
import Login from './components/Login';
import Footer from './components/Footer';
import Team from './components/Team';

function App() {

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openSignupModal = () => {
    setSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
  };


  return (
   <AuthProvider>
    <Router>
      <div className="App">
        <Navigation openLoginModal={openLoginModal}/>
	<Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
        <Login />
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
