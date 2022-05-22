import React from 'react';

import ListItemText from '@mui/material/ListItemText';



import TodoListItem from './todo-list-item';



// передаем из App
const TodoList = ( { todos , onDeleted , onToogleImportant, onToogleDone} ) => {


  const listStyle = {
    listStyle: 'none',
   
    
  };
  

  const elements = todos.map((item) => {
    const {id, ...itemProps} = item;
    //ПОлучаем все св-ва кроме id c помощью Rest пар-ра ...
   return (
     <ListItemText 
     
    //  key={item.id}
    key= {id}> 
     <TodoListItem
     style={{overflow:'scroll'}}
        // label= { item.label }
        // important = {item.important}
        // {...item }
        {...itemProps}
        onDeleted={()=> onDeleted(id)}
        onToogleDone = {()=> onToogleDone(id)}
        onToogleImportant = {()=> onToogleImportant(id)}
        /> 
       
        {/* взять каждое св-во из Item и передать в TodoListItem spread оператор 
        взять каждое св-во и передать в качестве аттрибута со значением в todo item*/}
    </ListItemText>
   )
  });


  return(
    

     <ul 
     style = {listStyle}>

      { elements }
     

      {/* <li> <TodoListItem 
      label={ todos[1].label }
      important = {todos[1].important}/> </li>


      <li> <TodoListItem 
      label={ todos[2].label }
      important = {todos[2].important}/> </li> */}

    </ul>
    
  
    
    
    
  )
  
}





export  { TodoList }