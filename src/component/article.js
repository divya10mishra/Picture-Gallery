import React from 'react';
import '../App.css'


function Article({item}) {

 console.log(item,"item")  
   

const header_container = {
    // border: "1px solid gray",
    borderRadius: "5px",
    height:"auto",
    width:"300px",
    paddingLeft:"25px",
    margin:"3%",
    marginLeft: '20%',
    // marginRight: '20%',
    display:'flex',
  
    padding:'10px',
    
  }
    
      return (
        <div style={header_container}>
            <img src={item.thumbnail} height='100' width='100'/>
           <div style={{display:'flex', flexDirection:'column', marginLeft:'10px'}}>
           <span style={{fontSize:'20px', fontWeight:'bold'}}>{item.title}</span>
           <span>{item.brand}</span>
           <span>{item.price}</span>
           </div>
          
        </div>
    )
}

export default Article;