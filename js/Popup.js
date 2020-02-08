class Popup {
  constructor() {
  }

  adjustCloseButton() {
    this.container.querySelector('.popup__close').addEventListener('click', () => {
      this.close();
    })
  }

  close() {
    this.container.classList.remove('popup_is-opened');
  }
}
