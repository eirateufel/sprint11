class Validator {
  constructor(validationMessagesRU) {
    this.validationMessagesRU = validationMessagesRU;
  }

  validateTextField(event) {
    const messageField = event.target.closest('.popup__field').querySelector('.unvalid-message');
    if (!event.target.validity.valid) {
      if (event.target.validity.valueMissing) {
        messageField.textContent = this.validationMessagesRU['empty']; //'Это обязательное поле';
      }
      else {
        messageField.textContent = this.validationMessagesRU['wrongLength']; //'Должно быть от 2 до 30 символов';
      }
    }
    else {
      messageField.textContent = '';
    }
  }

  validateURLField(event) {
    const messageField = event.target.closest('.popup__field').querySelector('.unvalid-message');
    if (!event.target.validity.valid) {
      messageField.textContent = this.validationMessagesRU['notALinik']; //'Здесь должна быть ссылка';
    }
    else {
      messageField.textContent = '';
    }
  }

  validateField(event) {
    const field = event.target;
    if (field.type === "text") {
      this.validateTextField(event);
    }
    if (field.type === "url") {
      this.validateURLField(event);
    }
  }

  validateForm(form) {
    const fields = form.querySelectorAll('.popup__input');
    for (const field of fields) {
      if (!field.validity.valid) { return false; }
    }
    return true;
  }

  validateAndRender(event) {
    const form = event.target.closest('.popup__form');
    const button = form.querySelector('.popup__button');
    if (this.validateForm(form)) {
      button.disabled = false;
    }
    else {
      button.disabled = true;
    }
    this.validateField(event);
  }
}
