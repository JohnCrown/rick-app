1.Разбиваем проект на компоненты 
1.1 У каждого компонента должна быть папка чтобы дополнять / редактировать его.
1.2 App - главный компонент , index.js - отрисовывыет app(Хорошие компонеты - независимые).
Все компоненты в папку Components
1.3 Если в return отрисовываем JSX элемент то import React.(const Header = () => return <h1>Hi</h1> };)
ReactDOM перерис. виртуальный дом в настоящий ReactDOM.render()
2.Если у компонета есть стейт то исп. class нет то функцию

3 .объект props передается в кажую функцию компонента в качестве первого параметра(аргумента).
с помощью props получаем все с-ва
import <SomeComponent>
(const Header = (props) => return <h1>{ props.св-во из SomeComponent}</h1> };)

3.1 так же получаем св-во из деструктуризации 
import <SomeComponent>
(const Header = ( { св-во }) => return <h1>{ .св-во из SomeComponent }</h1> };)
                                                                                      <!-- PROPS -->
Eсли передаем св-во без значение по дефолту оно true {св-во} = true
3.1.1Мы можем передать любые св-во в любые реакт компоненты ,для того чтобы получить св-во исп объект props
который передается внутрь каждой функции(по умолчанию передается пустой props{})
Можем передавать любой тип данных [ ] , () , {} , String ...etc

передача массива 
const arr = [ {h:1}, {g:2}, {op: 10} ]
<Component array = {arr} /> компонент получает св-во arr

(const Header = ({array}) => return <h1>{ array}</h1> };)

const elem = array.map((item) => {
 const rnd = Math.random();
  return(
   <li key={rnd++}> уникальный ключ для элементов
   <Component
   label= {item.label}
   important= {item.important}>
  </li>
  )
})

return (
  <ul>
   {elem}
  </ul>
)
с помощью спред оператора для объектов ...

   <li key={rnd++}> уникальный ключ для элементов
   <Component  {...item}/>
   взять каждое с-во массива и передать в качестве аттрибута и передать вместе со значениями
  </li>

  чтобы не передавать св-во исп деструктуризацию const { id, ...itemProps } = item;
  передаем все пар-ры кроме id  => <Component {...itemProps}>
  В Классе функция render() не принимает props на вход как в функциях в классе с-ва хранятся как поля этого класса this.props;
  const {props1, props = true} = this.props;

                                                  <!-- Обработчики событий  -->
  <Button
   onClick= {() => console.log('hi)}>

  onClickFunc () {
    console.log(`Hello ${prop}`)
  }

   <Button
  onClick= { this.onClickFunc }> без вызова функции()
  Будет ошибка т.к терется this нужно исп 
  1)стрелку () = >
  2) <Button
  onClick= { this.onClickFunc.bind(this) }> bind каждый раз создает новую функцию это плохо
  3)constructor () {
    super()
    this.onClickFunc = () => {
      console.log(`Hello ${this.props.prop}`)
    }
  }

  4)ClassFields 
  onClickFunc = () => {
     console.log(`Hello ${this.props.prop}`)
  }
  () => вставляем arrow функцию

                                                                      <!-- state  -->
constructor () {
  super() ;
  this.state = {
    done: false
  };
}
Старый формат

Новый формат
state = {
  prop: pr
}
ЧТобы исп. стейт нужно const { prop } из state = this.state;

state - setState Для чтения
setState принимает ту часть которая должна измениться 
напрямую изменять стейт нельзя чтобы обратиться this.setState({ Объект с изменениями что мы хотим поменять })

Стейт может исп. как асинхронный , нужно учитывать предыдущий выполнить тогда когда текущий будет в финальном сост.
this.setState((state) => {
 return {
   props: !state.props
 }
});

<!-- Если новое состояние не зависит от setState можно передавать внутрь объект , если зависит то исп () =>{return {} } -->



                                                                        <!-- Собственные события  -->
<App>    <!-- todoData 3)состояние измениться
      <AppHeader>
      <SearchPanel>
      <ItemStatusFilter>
      <TodoList> 2)Вызывает функцию которую передал ему <App>
             <TodoList>  <--Button 1)когда тут кликаем удалить мы вызываем функцию переданную <TodoList>
             <TodoListItem>

Создаем кастомное событие в <TodoList> onNameEvent = { ()=> {console.log('')}}
передаем в <TodoListItem > onClick= {this.props.onNameEvent}
Дальше передаем в <App> в нем <TodoList onNameEvent = {(id) => console.log(id)}>
дальше в <TodoList> получаем из <App> функцию ({ onNameEvent })
<TodoListItem onNameEvent= {() => onNameEvent(id)}>(Мы находимся в <TodoList>)
Мы передаем функцию ,а когда дом событие передаем выше по иерархии
Достаточно передать callback как propery а затем вызвать ее из компонента когда наступило событие 

                                                          Данные в реакт приложении

Если данные нужно исп в нескольких компонентах - хранить в родителе 
чтобы поднять данные вверх по иерархии компонентов исп. события

из страрого стейта можно скопировать в Новый
newObj ={ ...oldobj , prop: newValue};
newArr = [ ...oldArr.slice(0, idx)
newObj,
...oldArr.slice(idx + 1)
];

исп. onChange() чтобы полуать текущее значение 
onSubmit () отправка формы 
e.preventDefault отмена стандартного поведения

onChange() Обновляет state , а state обновляет value элемента 

state - единственный источник значений 

                                        <!-- Как создавать события -->
<App>
deleteItem = (id) => {
console.log('Deleted Label №',id);
    this.setState(({ todoData }) => {

      const idx = todoData.findIndex((el) => el.id === id);

      // todoData.splice(idx, 0) ТАК ДЕЛАТЬ НЕЛЬЗЯ напрямую изменять стейт

      
      const newArray = [...todoData.slice(0, idx),
                        ...todoData.slice(idx + 1)
      ];
      return {
       todoData: newArray
      };

    });
   

}
далее по иерархии идем ниже
<TodoList
 onDeleted={this.deleteItem}/>
 </App>
 

  <TodoList> const TodoList ( { onDeleted}) => { 
    const {id, ...itemProps} = item; не забываем id 
    return(
      <li onDeleted={()=> onDeleted(id)}>
      )};

      нужный компонент (самый нижний в иерархии)
   <TodoListItem>const TodoListItem = ({ onDeleted}) передаем его в этот компонент 
   <DeleteForeverIcon 
        onClick={onDeleted} /> кнопке удалить

                                                                  <!-- localStorage -->
 
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
