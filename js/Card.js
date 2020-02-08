class Card {
  constructor(popupPic) {
    this.popupPic = popupPic;
  }
  create(data) {
    this.name = data['name'];
    this.link = data['link'];
    const placeCard = document.createElement("div");
    placeCard.classList.add("place-card");
    placeCard.insertAdjacentHTML('beforeend', `
        <div class="place-card__image" style="background-image: url(${this.link});" >
          <button class="place-card__delete-icon"></button>
        </div>
        <div class="place-card__description">
          <h3 class="place-card__name">${this.name}</h3>
          <button class="place-card__like-icon"></button>
        </div>`);
    this.cardImage = placeCard.querySelector(".place-card__image");
    this.cardImage.link = this.link;
    const bentOpen = this.open.bind(this);
    placeCard.addEventListener('click', bentOpen)
    this.node = placeCard;
    placeCard.querySelector('.place-card__like-icon').addEventListener('click', this.like);
    placeCard.querySelector('.place-card__delete-icon').addEventListener('click', this.remove);
    return this;
  }

  open(event) {
    if (event.target.classList.contains('place-card__image')){this.popupPic.open(event)};
  }

  like(event) {
    event.target.classList.toggle('place-card__like-icon_liked');
  }

  remove() {
    this.closest('.places-list').removeChild(this.closest('.place-card'));
  }
}
