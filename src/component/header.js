import React from 'react';
import '../App.css'

function Header() {
    const header_container = {
      border: "1px solid black",
      borderRadius: "5px",
      height:"auto",
      width:"auto",
      padding:"25px",
      margin:"15px"
    }
    
    return (
        <div style={header_container}>
          
            <input className="inputBox" type="text" placeholder="Search.."/>
            <button className="button button1">Next</button>
            <button className="button button1">Prev</button>
        </div>
    );
  }

export default Header;