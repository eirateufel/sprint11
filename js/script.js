const placesList = document.querySelector(".places-list");
const server = '95.216.175.5';
const myCohort = 'cohort6';
const myToken = '571b4f53-a120-42d3-9a8d-042e90da9792';
const api = new Api(server, myCohort, myToken);
const user = new User(api);

const popupPic = new PopupPic();
const card = new Card(popupPic);

const cardList = new CardList(card, placesList, api);
const bioEditor = new PopupUser(user, api);
const cardAdder = new PopupCard(cardList);
const validator = new Validator(validationMessagesRU);



document.querySelector('.user-info__edit').addEventListener('click', function () {
  bioEditor.open(validator);
})

document.querySelector('.user-info__button').addEventListener('click', function () {
  cardAdder.open(validator);
})

cardAdder.form.addEventListener('submit', function (event) {
  cardAdder.getCard(card, event);
})


user.applyData();

cardList.render();

/** REVIEW: В целом по работе:
 * Хорошая работа, функциональность работает без багов в полном обьеме.
 *
 * Что сделано хорошо:
 * - Токен и номер группы переиспользуются
 * - Код хорошо разбит по классам и файлам, легко читается
 *
 * Что можно улучшить(необязательно):
 * - Реализовать индикацию запроса пользователю
 * - Реализовать вывод ошибок пользователю(самое простое - через window.alert)
 * - Реализовать добавление и удаление карточки для закрепления материала
 * - Можно обойтись без глобальных переменных, они засоряют обьект window
 и потенциально небезопасны - любой скрипт может изменить их. Подсказка: решить можно с помощью IIFE
 * - Реализовать добавление и удаление карточки для закрепления материала
 **/


 /*

  Спасибо большое за ревью, на исправление всех замечаний не хватает времени, но они очень ценные,
  постараюсь всё поправить для себя, когда работа будет принята.

 */
