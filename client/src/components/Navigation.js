// client/src/components/Navigation.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from './useAuth';

function Navigation({ openLoginModal, handleLogout }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { user = null, logout } = useAuth();

  return (
    <nav className="bg-blue-900 p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-white text-2xl font-bold">Logo</a>
        </div>

        {/* Hamburger Menu Button (visible on small screens) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links (visible on larger screens) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:underline">Services</Link>
          <a href="#" className="text-white hover:underline">About</a>

	  {location.pathname === '/dashboard' && user ? (
            <div className="user-profile">
            <img src={user.avatar} alt="User Avatar" className="avatar" />
            <button onClick={logout} className="text-white hover:underline">
            Logout
            </button>
        </div>
      ) : (
        <button onClick={openLoginModal} className="text-white hover:underline">
          Login
        </button>
      )}

        </div>
      </div>

      {/* Responsive Mobile Menu (visible on small screens) */}
      {isMenuOpen && (
        <div className="md:hidden mt-2">
          <Link to="/" className="block text-white py-2">Become a Mentor</Link>
	  <Link to="/dashboard" className="block text-white py-2">Find a Mentor</Link>
	  <Link to="/dashboard" className="block text-white py-2">Mutual Support</Link>
	  <Link to="/dashboard" className="block text-white py-2">Self Help</Link>
	  <Link to="/About" className="block text-white py-2">About Us</Link>

	  {location.pathname === '/dashboard' && user ? (
	    <div>
	    <hr />
            <img src={user.avatar} alt="User Avatar" className="avatar" />
            <p className="block text-white py-2">{user.user}</p>
            <button onClick={logout} className="text-white hover:underline">
            Logout
            </button>
	    </div>
      ) : (
        <button onClick={openLoginModal} className="text-white hover:underline">
          Login
        </button>
      )}
	
        </div>
      )}
    </nav>
  );
}


export default Navigation;
