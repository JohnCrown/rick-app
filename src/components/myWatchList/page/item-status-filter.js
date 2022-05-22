import React , {Component} from "react";

import Button from '@mui/material/Button';


export default class ItemStatusFilter extends Component {

  buttons = [
   { name: 'all', label: 'ALL'},
   { name: 'active', label: 'ACTIVE'},
   { name: 'done', label: 'DONE'},
   { name: 'important', label: 'IMPORTANT'}
  ];

 


  render () {



    const { filter  } = this.props;

    

    const buttons = this.buttons.map(( { name, label }) => {
      //Кнопка активна если выбранно указ. имя
     const isACtive = filter === name;
     const reload = isACtive ?  'contained' :  'outlined' ;
     
      return (
        <div style={{display: 'inline-flex' , marginTop: '25px'}}
        key= {name}>
        <Button 
        onClick={() => this.props.onFilterChange(name)}
        variant= {reload}
        type="button">
          {label}
        </Button>
        </div>
      )

    });
  
  return (
        <>

        { buttons }
       {/* <Button variant="outlined">All</Button>
        <Button variant="contained">Active</Button>
        <Button variant="outlined">Done</Button> */}
        </>
       )

  }
}

