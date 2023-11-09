import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <div className="rabyyehdi">

      <nav>
        <div className="logo">
          <div className="logo-text">HealthCare</div>
          <div className="logo-subtext">Online Pharmacy</div>
        </div>
        <ul className="nav-links">
        <Link to={'/home'}  >  <li>Home</li></Link>
        <Link to={'/Register'}> <li>register</li> </Link>
        <Link to={'/login'}>  <li>Login</li> </Link> 
        <Link to={'/profile'}>  <li>Profile</li> </Link>
        </ul>
        <div className="search">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
