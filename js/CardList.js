class CardList {
  constructor(card, container, api) {
    this.card = card;
    this.container = container;
    this.api = api;
  }

  addCard(card) {
    this.container.appendChild(card.node);
  }

  render() {
    this.loadInitialCards();
  }

  loadInitialCards(){
    this.api.loadInitialCards()
      .then((res)=>{
        for (const info of res){
          const data = {
            name: info.name,
            link: info.link,
          };
          this.card.create(data);
          this.addCard(card);
        }
      })
      .catch((err)=>{
        console.log(err);
      });
  }
}
