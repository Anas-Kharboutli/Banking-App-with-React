import React from "react";
import { Link } from 'react-router-dom';

export default function NavBar ()  {
 
    return (
      <>
        <div id="navBar">
         <ul className="nav nav-tabs">
    
         <li className="nav-item">
         <span style={{color:"white", 
                       background:"black", 
                       fontSize:"28px",
                       fontWeight:"bold"}}>BadBank</span>
  </li>

  <li className="nav-item">
    <Link className="nav-link" aria-current="page" to="/">Home</Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/newAccount">Create Account
    <span className="hidden-description">Create your own account</span></Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/login"
    >Login
    <span className="hidden-description">Log in your existing account</span></Link>
    
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/deposit">Deposit
    <span className="hidden-description">Make real-time deposit</span></Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/withdraw">Withdraw
    <span className="hidden-description">Make instant withdrawal</span></Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/alldata">All Data
    <span className="hidden-description">See all user data</span></Link>
  </li>
  
</ul>
</div>
</>
    );
} 