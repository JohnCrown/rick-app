import React  from "react";
import icon from './error.png'

const ErrorIndicator = () => {
    return (
        <div className="error-indicator "
        style={{textAlign: 'center'}}>
          <img 
          style={{width: '500px' }}
          src={icon} alt={icon}
          
          />
        <div
        
        style={{fontSize: '40px' }} >Sorry , but we go down ... </div>
        
       
      </div>
    );
};


export default ErrorIndicator;