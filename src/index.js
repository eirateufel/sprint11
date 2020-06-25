import './pages/index.css';

import Api from './Api';
import User from './User';
import PopupPic from './PopupPic';
import Card from './Card';
import CardList from './CardList';
import PopupUser from './PopupUser';
import PopupCard from './PopupCard';
import Validator from './Validator';
import {validationMessagesRU} from './unvalidMessages';

const placesList = document.querySelector(".places-list");
const myCohort = 'cohort6';
const myToken = '571b4f53-a120-42d3-9a8d-042e90da9792';

//url сервера
const serverUrl =
  NODE_ENV === "development"
    ? "http://praktikum.tk/cohort6"
    : "https://praktikum.tk/cohort6";

    console.log(serverUrl)

const api = new Api(serverUrl, myCohort, myToken);

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

