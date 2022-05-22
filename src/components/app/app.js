import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom';

import './app.css'
 
import Navigation from "../navigation/navigation";
import ErrorBoundry from "../errors/errorBoundry";
import Characters from "../characters/characters";
import TestPage from "../navigation/header/testPage";
import Episodes from "../episodes/episodes";
import Location from "../locations/locations";
import MyWatchList from "../myWatchList/app/app";
import CharacterList from "../characterList/characterList";

import ErrorIndicator from "../errors/errorIndicator";
export default class App extends Component {
   state = {
      showRandomCharacter: true,
      selectedPerson: null
      
    };

    toggleRandomCharacter = () => {
      this.setState((state) => {
        return {
         showRandomCharacter: !state.showRandomCharacter
        }
      });
    };
   

    onPersonSelected = (id) => {
     this.setState({
        selectedPerson: id
     });
    };


    componentDidCatch() {
       console.log('ComponentDiDCatch()');
       this.setState({hasError: true});
    }


render()  {
   // const char = this.state.showRandomCharacter ? <Characters /> : null;
 
  if(this.state.hasError) {
     return <ErrorIndicator />
  }


  return(

    <ErrorBoundry >
       <Navigation /> 
          
       {/* {char}
       <div>
           <button 
              style={{marginLeft: '28px' , width : '420px'}}
              onClick={this.toggleRandomCharacter}
              type="button" 
              className="btn btn-success">
                       showRandomCharacter
          </button>
       </div> */}
       
       {/* <Characters onItemSelected={this.onPersonSelected} /> */}
       
          
       
       {/* если стейт в компоненте то передавать так */}
       {/* <Characters onItemSelected={this.state.onPersonSelected} /> */}
       
          <Routes>

         
                 <Route path="/" element={<CharacterList />} />
                 <Route path="/characters"element={<CharacterList />} />
                 <Route path="/episodes" element={<Episodes />} />
                 <Route path="/locations" element={<Location />} />
                 <Route path="/mywatchlist" element={<MyWatchList />} />
                 <Route path="/testpage" element={<TestPage />} />
                 {/* <Route path="*" element={<CharacterList />} /> */}
                 
          </Routes>
    
    </ErrorBoundry>
    
        )
   }

}
