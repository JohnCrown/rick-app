import React  from "react";

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';



//у класса св-ва хранятся в this.props а в функции принимаются на вход
const TodoListItem =  ( {label , onDeleted , onToogleImportant, onToogleDone , done , important , onEdit} ) => {
  
  //localStorage


 
  // state = {
  //   done: false,
  //   important: false
  // };


  //ES 5
// constructor() {
//   super();
//   this.state = {
//     done: false
//   };
// }



//Class Fields arrow функция сохраняет контекст

//Стейт нельзя напрямую менять, чтобы читать нужно исп. setState
// onLabelClick = () => {
//   this.setState(
//     {done: true}
//   );
// }
// onLabelClick = () => {
  
//   this.setState(state => {
//     return{
//       done: !state.done
//     }
//   });
// }
// onImportantClick = () => {
//   this.setState ((state) => {
//     return {
//       important: !state.important
//     }
//   })
// }


 //1 Способ
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     label: ''
  //   }
  //   this.onLabelClick = this.onLabelClick.bind(this);
  // }


  
    //3 способ
  // constructor() {
  //   super();

  //   this.onLabelClick = () => {
  //     console.log(`Done ${this.props.label}`);
  //   }
  // }



  //1 Способ
  // onLabelClick  () {
  //   console.log(`Done ${this.props.label}`)

   //localStorage

 //Передаем в localStorage  setItem.todoData 

  const style = {
    color: 'black',
    fontSize: '30px',
    maxWidth: '50%',
    margin: '2% auto',
    background: 'orange',
    // wordwrap: 'break-word',
    
    padding: '5px',
    
    
  };
  
  


  return (
    // const { done , important } = this.state;//Приходят уже из app

    //Получаем из пропсов слушатели

    //2 способ привязки
    //Каждый рах при вызове render( ) мы создаем новую функцию минус bind() this.onLabel.Click.bind(this)

    <div style={style}>
      <div
        className="list-group"
        style={{ background: important ? "steelblue" : "white" }}>

        <p
          style={{
            textDecoration: done ? "line-through" : "none",
            color: done ? "gray" : "black",
            display: "inline-block",
            wordBreak: "break-word",
          }}
          // onClick = {onToogleDone}
        >
          {/* <input 
          type="text"
          value={onEdit}
          name="edit"
          id="editValue"

          /> */}
          {label}
        </p>
      </div>

      <DeleteForeverIcon onClick={onDeleted} />
      <i style={{ color: "red" }}>delete</i>
      <PermDeviceInformationIcon
        //  onClick={ this.onImportantClick }
        onClick={onToogleImportant}
      />
      <i style={{ color: "steelblue" }}>important</i>
      <AssignmentTurnedInIcon
        //  onClick={ this.onLabelClick }
        onClick={onToogleDone}
      />
      <i style={{ textDecoration: "line-through" }}>done</i>
    </div>
  );
  
  
}


export default TodoListItem;

//Объект props передается в каждую функцию-компонент в качестве 1 пар-ра даже еслим не задан он есть и будет пуст
//внутри props будут названия всех св-в которые передали
//За счет деструктуризации берем сразу значение из объекта который передается аргументом функции
//можно в пропс передавать строки , массивы , объекты , булевы, функции
// const TodoListItem = ({ label, important = false }) => { //Достаем из props.label 
//  const style = {
//    color: important ? 'orange' : 'black',
//    fontSize: '20px',
//    fontWeight : '500',
//    margin: '5% auto',
//    border: 'solid 1px ',
//    width: '50%'
//  };



//   return ( 
//   <div style={style}>
    
//   <li >
//       {label}
              
             
//   </li> 
  
//   <DeleteForeverIcon  />
//   <PermDeviceInformationIcon />
 
//   </div>
  
 
//          )
// }

