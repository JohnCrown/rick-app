import React from "react";


const AppHeader = () => {
  const headerStyle = {
    fontSize: '60px' 
  };
  return(
    <div>
      
      <h1 
      style = {headerStyle}>
        Welcome to Rick and Morty WatchList
        </h1>
        <div style={{fontSize: '25px', color: 'green'}} > Date | { (new Date()).toDateString() }</div>
      
        
    </div>
    )
}

export default AppHeader;