class PopupCard extends PopupForm {
    constructor(cardList) {
        super();
        this.container = document.querySelector('.popup__content').closest('.popup');
        this.form = this.container.querySelector('.popup__form');
        this.cardList = cardList;
    }

    getCard(card, event) {
        this.card = card;
        this.submit(event);
    }

    submit(event){
        super.submit(event);
        this.applyData(this.valueOne, this.valueTwo);
        this.close();
        this.form.removeEventListener('submit', this.bentSubmit);
    }

    applyData(about, url) {
        const data = {
            name: about,
            link: url,
        }
        this.card.create(data);
        this.cardList.addCard(this.card);
    }
}
