                                    <!-- API -->
1.XMLHttpReuquest (Устаревший)
2.Fetch(Больше возможностей работы с сервером)
fetch работает с promise

API которые оборачивают компоненты в более высокоуровневые компоненты
самые популярные библиотеки 
<!-- Axios
    Superagent
    Got
    Request
    Reqwest   -->

                                              <!-- FETCH -->
функция fetch return promise и когда promise выполнится мы получаем {response}
response не обязательно содержит весь ответ сервера
response - методы (каждый метод return promise)
res.status
кроме .json() : arrayBuffer() , blob() text() formData()
.then((body) => {return body}) получить тело 

  .then((res) => { 
                console.log('Got response' , res.status);
                return res.json();
              })
              .then((body) => {
                console.log(body);
              });

чтобы получить данные с сервера нужно выполнить 2 вызова ( каждый вернет promise)
res = await fetch(url)
body = await res.json

const getResourse =  async (url) => {
  const res = await fetch(url);Отправляем запрос и получает response
  const body = await res.json();получаем тело ответа
  return body;

}

getResourse('url') 
.then((body) => {
  console.log(body)
})

class Service инкапсуляция кода для работы с сервером.

В конструкторе компонента вызываем сервис который получит данные
в then() обновляем состояние компонента 

Трасформация данных в API 
1.Изолируйте код который обрабатывает данные
2.ОТделяйте модель данных API от модели данных приложения 



                                                    <---!- 
                                                    SPinner  -->
Состояние загрузки можно хранить в стейте
В зависимости от состояние рендерим содержимое 
Разделять логику и рендеринг 

<React.Fragment>
      Позволяет создать несколько дочерних элементов не создавая DOM элементы
    </React.Fragment>


    <!-- Обработка ошибок -->

  в state поле где будет флаг : нужно отобразить ошибку, в зависимости от флага отображать ошибку или компонент
  код с await может дать ошибку

  ================================================
  1.React ничего не знает о работе с сервером это задача др. библиотек

  2.Сетевой код нужно изолировать от кода компонента

  3.Если необходимо  - трасформируйте данные до того , как их получает компонент

  4.Обрабатывайете состояние загрузка и ошибка

  5.Разделяйте логику и рендер компонентов.

  ======================================================================