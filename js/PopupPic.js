
class PopupPic extends Popup {
  constructor(){
      super();
      this.container = document.querySelector('.popup__pic').closest('.popup');
      this.pic = this.container.querySelector('.popup__fullsize-pic');
  }

  open(event){
    this.pic.src = event.target.link;
    this.bentCallback = this.openForm.bind(this);
    this.pic.onload = this.bentCallback;
    this.adjustCloseButton();
  }

  openForm(){this.container.classList.add('popup_is-opened');
}
}