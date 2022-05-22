import React from "react";
import Spinner from "../spinner/spinner";
import RickService from "../../services/service";

export default class Location extends React.Component {


  rickApi = new RickService() ;
  
  state = {
    locationList: null
  }

  componentDidMount() {
    this.rickApi
     .getAllLocations()
     .then((locationList) => {
       this.setState({
         locationList
       });
     });
  }

  renderItems(arr) {
    return arr.map(( {id, name , type , dimension} )=> {
      return(
        
        <li className="list-group-item d-flex justify-content-between align-items-center"
        key={id}>
          {name}
          
        <span className="badge bg-primary rounded-pill"
         key={id}>
           {type}
        
         </span>
         {/* <span className="badge bg-primary rounded-pill"
         key={name}>
           {dimension}
        
         </span> */}
         
      </li>
      );
    });
  }

render() {
 
  const { locationList} = this.state;

  if( !locationList) {
    return <Spinner />
  }
  const items = this.renderItems(locationList)
  return (



    <ul 
    style={{margin: '30px' , width: '600px', padding: '5px'}}
    className="list-group">
      <li style={{color: 'green', textAlign: 'center', fontSize:'45px'}}>Location </li>
          {items}
          
  </ul>
    // <Spinner />
  )
 }

}