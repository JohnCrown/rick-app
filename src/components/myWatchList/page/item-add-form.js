import React, {Component} from 'react' ;
import Button from '@mui/material/Button';

export default class ItemAddForm extends Component{

  state = {
    label: ''
  };

  //e это ивент target - интпут который изменяется value - Значение
  onLabelChange = (e) => {
    // console.log(e.target.value);
    //так как у нас нет старого стейта передаем объект
    this.setState({label: e.target.value.toString() });
    
  };

  onSubmit = (e) => {
    

    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    
    this.setState (
     { label: ''}
    );


    

  };
 
  //localStorage

 //Передаем в localStorage  setItem.todoData 
 
 

 
  render() {
 
    
    


  const inputStyle = {
    minWidth: '400px',
    width: '60%',
    height : '60px',
    marginRight: '5px',
    fontSize: '30px',
    borderColor: 'cyan',
    borderRadius: '15px'
  }
  return (
    <form
    style={{position: 'sticky' , bottom: '0px'}}
    
    onSubmit={this.onSubmit}>
      
      <input 
        type='text'
        placeholder='Write Something...'
        style={inputStyle}
        onChange={this.onLabelChange}
        value={this.state.label}/>

        

     
  
    <Button variant="contained" color="primary"
        onClick={ () => this.props.onItemAdded(this.state.label)}>
          Add Note
    </Button>
    </form>
  )
 }
}