// client/src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer Style="background-color">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
	<li>
	  <Link to="/login">Login</Link>
	</li>
	<li>
	  <Link to="/About">About</Link>
	</li>
      </ul>
    </footer>
  );
}

export default Footer;
