import React , {Component} from "react";
import RickService from "../../services/service";
import Spinner from "../spinner/spinner";
import MakeError from "../errors/makeError";
export default class Episodes extends Component {

rickApi = new RickService();


state = {
  episodeList: null
}

componentDidMount() {
  this.rickApi
   .getAllEpisodes()
   .then((episodeList) => {
     this.setState({
       episodeList
     });
   });
}

renderItems(arr) {
  return arr.map(( {id, name , air_date} )=> {
    return(
      
      <li className="list-group-item d-flex justify-content-between align-items-center"
      key={id}>
        {name}
        
      <span className="badge bg-primary rounded-pill"
       key={id}>
         {air_date}

       </span>
       
    </li>
    );
  });
}

  render() {
 
 const { episodeList } = this.state;
  if ( !episodeList ) {
    return <Spinner />
  }

  const items = this.renderItems(episodeList)

  return(
    <>
    <ul 
    
    style={{margin: '30px' , width: '600px'}}
    className="list-group">
      <li style={{color: 'green', textAlign: 'center', fontSize:'45px'}}>Epidodes </li>
          {items}
  </ul>
   <MakeError />
  </>
  
  )
 }
}