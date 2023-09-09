import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import logo from '../Images/logo-removebg-preview.png';
import './NavbarComponent.css';

export default function NavbarComponent() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {/* Use "to" instead of "href" */}
            <img src={logo} width="70px" height="70px" alt="img" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
            
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mobile-phones">
       
                  Mobile Phones
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cars">
             
                  Cars
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/motorcycles">
            
                  Motorcycles
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tv-video-audio">
            
                  TV - Video - Audio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
