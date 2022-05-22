import React from "react";

const ItemStatusHeader = ( { todo , done , imp}) => {
  return(
    <h2
    style={{textDecoration: 'underline' ,color : 'orange'}}>
   <span style={{fontSize:'50px'}}> {todo} </span> more to do |
    <span style={{color: 'tomato'}}> {done}</span> done | important  
    <span style={{color: 'steelblue'}}> {imp} </span>
  </h2>
  )
};


export default ItemStatusHeader;