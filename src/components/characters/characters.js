import React, { Component } from "react";
import RickService from "../../services/service";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../errors/errorIndicator";



export default class Characters extends Component {

  rickApi = new RickService() ;
 
  state = {
    characterList: [],
   character: {},
   loading: true,
   error: false,
   person: null
   

  }
  // Убираем из коструктора функцию
  // которая связанна с API
// constructor () {
//   super();
//   this.updateCharacter();
//   console.log('constructor');
// }


renderItems(arr) {
  return arr.map(( {id, name  } )=> {
    return(
      
      <li className="list-group-item d-flex justify-content-between align-items-center"
      onClick={ () => this.props.onItemSelected(id)}
      key={id}>
        {name}
        
      
       {/* <span className="badge bg-primary rounded-pill"
       key={name}>
         {dimension}
      
       </span> */}
       
    </li>
    );
  });
}



componentWillUnmount() {
  console.log('Component Will unmount');
}

//Стрелка
onCharacterLoaded = (character) => {
          this.setState({
            character,
            loading: false })
}

onError = (err) => {
        this.setState({
          error: true, 
          loading: false
        });
};



  updateCharacter() {
        console.log('update Character');
        const id = Math.floor(Math.random()*800) + 2;
      this.rickApi
      .getSingleCharacter(id)
      .then(this.onCharacterLoaded)
      .catch(this.onError);

  };

  // updatePerson() {
  // const { characterId } = this.

  // }


  componentDidMount() {
    console.log('Component did mount');
    this.updateCharacter();
    this.rickApi
       .getAllCharacter()
       .then((characterList) => {
         this.setState({
           characterList
         });
       });
  }
  

  //если меняемм state тут то оборачиваем код в условие
componentDidUpdate(prevProps) {
 console.log('DiDUpdate() ');
  // if()
 }
 
  
  render() {
    const { characterList} = this.state;
    const items = this.renderItems(characterList);
    console.log('render');
   
  
    const { character ,loading , error  } = this.state;
   
    const hasData = !(loading || error);
    
  const spinner = loading ? <Spinner /> : null;
  const content = hasData ? <CharacterView character ={character}/> : null;
  const errorMessage = error ? <ErrorIndicator /> : null;

  
  
 return (
  <div 
  style={{width: '40%' , display: 'inline-grid', marginLeft: '30px'}}>
       {errorMessage}
       {spinner}
       {content}
       {items}
       

      
       

</div>
    )
 }
}


const CharacterView = ( { character }) => {
  const { gender ,status , species , name , image , id  } = character;
  return(
    <React.Fragment>
       <div className="card mb-3" 
       style={{width: '350px'}}>
       <h3 className="card-header">{name}</h3>

          <div className="card-body">

               <img src={image} className="card-title" alt={name}/>
            
          </div>
          
          
                      <ul className="list-group list-group-flush"
                          style={{textAlign: 'center'}}>
                      <li className="list-group-item">species : {species}</li>
                      <li className="list-group-item">gender -  {gender}</li>
                      <li className="list-group-item">id {id}</li>
                      
                    </ul>
          
          <div className="card-footer text-muted"
                style={{textAlign: 'center'}}>
                 status : {status}
          </div>
    

          
 </div>
 

    </React.Fragment>
  )
}