import React from 'react';
import '../App.css'


function Article(props) {

    const {item}=props;

const header_container = {
    border: "1px solid black",
    borderRadius: "5px",
    height:"auto",
    width:"600px",
    padding:"25px",
    margin:"15px"
  }
    
      return (
        <div style={header_container}>
           <div><img src="nature.jpg" alt="Nature" className="responsive_image"></img>
           <i class="fal fa-ellipsis-v-alt"></i>
           </div>
           <p>{item.id}</p>
           <p>test2</p>
        </div>
    )
}

export default Article;