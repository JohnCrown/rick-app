
Uncaught TypeError: Cannot read properties of null (reading 'map')


const [users, setUsers] = useState({user:['user1', 'user2', 'user3']});

Здесь users это объект, единственное свойство которого является массивом.

setUsers(users.user.filter((item,i) => i !== index));

А здесь - массив.

const list = users.user.map(...

У этого массива вы пытаетесь прочитать свойство user, которого нет, получаете undefined, а дальше... Ну, сообщение об ошибке вы уже видели.

Вы бы определились, чем должен быть users.