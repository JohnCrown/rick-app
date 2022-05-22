import React, { Component } from "react";
import Input from '@mui/material/Input';


export default class SearchPanel extends Component {

  state = {
    term: ''
  }

  componentDidUpdate () {
    localStorage.setItem('dataStore' , JSON.stringify(this.state.term));
    
    
  } 

  onSearchChange = (e) => {
  const term = e.target.value;
  this.setState ({term});
  //связь с app
  this.props.onSearchChange(term);
  };


  render() {
  const inputS = {
    marginTop: '25px',
    marginRight: '5px',
    width:' 200px'
  }
  return (
    <div>
        <Input 
        placeholder='search...' 
        style={inputS}
        value={this.state.term} 
        onChange={this.onSearchChange} />

</div>     
       
       
     
  )
}

}

