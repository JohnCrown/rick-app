import React, {Component} from "react";
import  {  TodoList } from "../page/todo";
import AppHeader from "../page/app-header";
import SearchPanel from "../page/search-panel";
import ItemStatusFilter from "../page/item-status-filter";
import ItemStatusHeader from "../page/item-status-header";

import ItemAddForm from "../page/item-add-form";

export default class MyWatchList extends Component {

  randomId = Math.random();

  state = {
    todoData : [
      this.createTodoItem('Leave me here...'),
      this.createTodoItem('Leave me here... 10'),
      this.createTodoItem('Leave me here... 12'),

      // {label: 'Leave me here 1..', important: false, id: 1 },
      // {label: 'Leave me here 2..', important: true, id: 2 },
      // {label: 'Leave me here 3..',important: false, id: 3 }
  
    ],
        term : '',
        filter: 'all',
        onEdit: false,
        
        
 
  };

  
 //localStorage
 
 componentDidUpdate () {
   localStorage.setItem('dataStore' , JSON.stringify(this.state.todoData));
   
   
 } 
 
//  Local Storage

//  To save our tasks, we will use window.localStorage .We use these methods to set or get values:
 
//  storage.setItem(key, val);
//  const val = storage.getItem(key);

 

 componentDidMount() {
   const dataStore = JSON.parse(localStorage.getItem('dataStore'));
   if (dataStore !== null){
     this.setState( {todoData : dataStore } );
   }
 }



//Функция которая создает список туду чтобы не дублировать код
  createTodoItem(label) {
    return {
      label,
      important : false,
      id: this.randomId++,
      done: false
    }
  }
  
  

  deleteItem = (id) => {
    console.log('Deleted Label №',id);
    this.setState(({ todoData }) => {

      const idx = todoData.findIndex((el) => el.id === id);

      // todoData.splice(idx, 0) ТАК ДЕЛАТЬ НЕЛЬЗЯ напрямую изменять стейт

      // const before = todoData.splice(0, idx);
      // //ОТ нулевого до нужного
      // const after = todoData.slice(idx + 1);
      // //сам индекс пропадет + 1 до конца если не передаем 2 аргумент
      // const newArray = [...before ,...after];
      //ВОзвращаем новое состояние
      const newArray = [...todoData.slice(0, idx),
                        ...todoData.slice(idx + 1)
      ];
      return {
       todoData: newArray
      };

    });
   
  };

  

 toggleProperty( arr, id , propName) {
  const idx = arr.findIndex((el) => el.id === id);
  const oldItem = arr[idx];
 //1. update Object
 
 
 //Создаем объект у которого все св-ва старого массива + done
//  const newItem = {...oldItem ,
//                    done: !oldItem.done};
const newItem = {...oldItem ,
                   [propName]: !oldItem[propName]};

 
        //2.construct new array
    return  [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];

 }





  onToogleDone = (id) => {
    this.setState(({ todoData }) => {
    //   const idx = todoData.findIndex((el) => el.id === id);
    //   const oldItem = todoData[idx];
    //  //1. update Object
     
     
    //  //Создаем объект у которого все св-ва старого массива + done
    //  const newItem = {...oldItem , done: !oldItem.done};
     
    //         //2.construct new array
    //  const newArray = [
    //    ...todoData.slice(0, idx),
    //   newItem,
    //   ...todoData.slice(idx + 1)
    // ];
    return {
      todoData: this.toggleProperty(todoData , id , 'done')
    }


    });
   console.log('Toogle Done', id);
  };

  onToogleImportant = (id) => {
    this.setState(({ todoData }) => {
    return {
      todoData: this.toggleProperty(todoData , id , 'important')
    }

    
  });
  console.log('Toogle Important', id);
};





//фильтр нужных indexOf вернет 0 или больше если есть строка -1 если строки нет
search  (items , term) {
  //если пустая строка
  if (term.length === 0) {
    return items;
  }
    return items.filter( (item) => {
    return item.label
             .toLowerCase()
             .indexOf(term.toLowerCase()) > -1

  });

}

onSearchChange = (term) => {
 this.setState ( { term } )
}

onFilterChange = (filter) => {
  this.setState ( { filter } )
 }

filter(items, filter) {
  switch(filter) {
    case 'all' :
      return items;
      case 'active' :
      return items.filter((item) => !item.done);
      case 'done' : 
      return items.filter((item) => item.done);
      case 'important' : 
      return items.filter((item) => item.important);
      default :
       return items;
  } 
}






  addItem = (text) => {
            console.log('Added', text );
            //generate id
            
            const newItem = this.createTodoItem(text)
            // {
              
            //   label: text,
            //   important: false,
            //   id: this.randomId++
              
            // };
            console.log(newItem.id);
            
            
            //add element in array?
            this.setState(( { todoData }) => {
            const newArr = [
              ...todoData,
              newItem
            ];
            return {
              todoData: newArr
            };

   }) ;
  };
  
  

 
render () {




  const { todoData , term , filter } = this.state;
  // const doneCount = this.state.todoData

  
  
 

  
  
 
  

  const visibleItems = this.filter(
                          this.search(todoData, term), filter);
  //Поиск элементов
  const doneCount = todoData
                 .filter((el) => el.done).length;

  const todoCount = todoData.length - doneCount;

  const todoImportant = todoData.filter((el) => el.important).length

 

  const textAlign = {
    textAlign: 'center',
    fontDamily: 'Open Sans',
  };
  
  
  return(
<div 
style = {textAlign}>

      
      <AppHeader />
    
      <SearchPanel 
      onSearchChange= {this.onSearchChange}/>
      <ItemStatusFilter 
      onFilterChange= { this.onFilterChange}
      filter = {filter}/>
      <TodoList 
      todos = {visibleItems}
      
      onToogleImportant = {this.onToogleImportant}
      onToogleDone = {this.onToogleDone}
      //todoData часть стейта поэтому this.state
      onDeleted={this.deleteItem}/>
        <ItemStatusHeader 
      todo={todoCount}
      done={doneCount}
      imp={todoImportant}
      />
      <ItemAddForm 
      
      onItemAdded={this.addItem}/>


</div>
    )
 }

}