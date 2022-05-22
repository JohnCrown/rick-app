import React from "react";
import {Link} from "react-router-dom";



const Navigation = () => {
    return(
      
      
      
      <nav 
      style={{marginBottom: '25px', width: '1200px'}}
      className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
         <div className="collapse navbar-collapse" id="navbarColor03">
              <h1 
            //   style={{fontSize: '45px'}}
              className="navbar-brand">Rick and Morty DB</h1>
              
      
              <ul className="navbar-nav me-auto">

                            <li className="nav-item" >
                                  <Link 
                                  className="nav-link active"
                                  to="/">CharacterList </Link>
                            </li>

                            <li className="nav-item" >
                                  <Link 
                                  className="nav-link active"
                                  to="/testpage">TestPage </Link>
                            </li>
                            
                            <li className="nav-item">
                                  <Link 
                                  className="nav-link"
                                  to="/characters">Character </Link>
                            </li>

                            <li className="nav-item">
                                    <Link 
                                    className="nav-link"
                                    to="/episodes">Эпизоды</Link>
                                  </li>
                            <li 
                            
                            className="nav-item">
                                    <Link 
                                    className="nav-link"
                                    to="/locations">Локации </Link>
                                  </li>
                            <li className="nav-item">
                                  <Link 
                                  className="nav-link"
                                  to="/mywatchlist">Мой список наблюдения </Link>
                            </li>
             </ul>
        </div>
        </div>
        </nav>
    )
}

export default Navigation;