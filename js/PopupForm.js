class PopupForm extends Popup {
    constructor() {
        super();
    }

    open(event) {
        this.container.classList.add('popup_is-opened');
        this.adjustCloseButton();
        this.bentSubmit = this.submit.bind(this);
        this.validateAndRender(event);
        this.adjustSubmitButton();
    }
    
    adjustSubmitButton() {
        this.form.addEventListener('submit', this.bentSubmit)
    }

    close() {
        this.container.classList.remove('popup_is-opened');
        this.form.reset();
        this.form.querySelectorAll('.unvalid-message').forEach(function (field) {
            field.textContent = '';
        })
        this.form.querySelector('.popup__button').disabled = true;
    }


    submit(event) {
        event.preventDefault();
        this.valueOne = this.form.querySelector('.popup__input_first').value;
        this.valueTwo = this.form.querySelector('.popup__input_second').value;
    }

    validateAndRender(validator) {
        this.form.querySelector('.popup__input_first').addEventListener('input', function (event) {
            validator.validateAndRender(event);
        })
        this.form.querySelector('.popup__input_second').addEventListener('input', function (event) {
            validator.validateAndRender(event);
        })
    }
}
