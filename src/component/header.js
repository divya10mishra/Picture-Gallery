import React from 'react';
import '../App.css'

function Header() {
    const header_container = {
      border: "1px solid black",
      borderRadius: "5px",
      height:"auto",
      width:"auto",
      padding:"25px",
      margin:"15px",
      display:'flex',
      justifyContent:'space-between'
    }
    
    return (
      <div style={header_container}>
        <label style={{ fontSize:'26px', fontWeight:'bold', color:'orange'}}>Picture Gallery </label>
        <input
          style={{
            border: "1px solid gray",
            borderRadius: "5px",
            padding: "15px",
          }}
          type="text"
          placeholder="Search.."
        />
      </div>
    );
  }

export default Header;