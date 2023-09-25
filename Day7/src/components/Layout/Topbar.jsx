import React from 'react';
import { Link } from 'react-router-dom';
import "./Topbar.css"

function Topbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" id="garden">URBONOISE</a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-3" >
              <Link to="/" id='link'><a className="nav-link text-light" id="nav">Home</a></Link>
            </li>
            <li className="nav-item">
              <Link to="/about" id='link'><a className="nav-link text-light" id="nav">About Us</a></Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" id='link'><a className="nav-link text-light" id="nav">Contact</a></Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard" id='link'><a className="nav-link text-light" id="nav">Dashboard</a></Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" id='link'><a className="nav-link text-light" id="nav">Admin</a></Link> {/* Add the Admin link */}
            </li>
            <li className="nav-item">
              <Link to="/login"><button type='button' className="btn btn-outline-primary" ><i class='bx bx-user'></i> Login</button></Link>
            </li>
            <li className="nav-item">
              <Link to="/register"><button type='button' className="btn btn-outline-primary" >Sign In</button></Link>
            </li>
            <li className="nav-item">
              <Link to="/login"><button type='button' className="btn btn-outline-primary" ><i class='bx bx-user'></i> Logout</button></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Topbar;
 