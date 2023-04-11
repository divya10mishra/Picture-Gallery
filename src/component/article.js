import React from 'react';
import '../App.css'


function Article(props) {

    const {item}=props;
   

const header_container = {
    border: "1px solid black",
    borderRadius: "5px",
    height:"auto",
    width:"auto",
    paddingLeft:"25px",
    margin:"15px",
    marginLeft: '20%',
    marginRight: '20%'
  }
    
      return (
        <div style={header_container}>
           <div>
           <i class="fal fa-ellipsis-v-alt"></i>
           </div>
           <p>{item.id}</p>
           <p>test2</p>
        </div>
    )
}

export default Article;