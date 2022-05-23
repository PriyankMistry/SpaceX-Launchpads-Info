import React from 'react';
import spacex from "../Assets/spacex-logo.png";
import "../Assets/Navbar.css"

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-customclass">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src={spacex} alt="" height="35" className="d-inline-block align-text-top"/>
      </a>
      <h2 className='mt-3'>{props.Headertitle}</h2>
      <a href="http://localhost:3000/"><h3 className='mt-3' style={{color:"white"}}>Home</h3></a>
    </div>
  </nav> 
  )
}
