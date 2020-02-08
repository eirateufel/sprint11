class PopupUser extends PopupForm {
    constructor(user, api) {
        super();
        this.container = document.querySelector('.popup__user').closest('.popup');
        this.form = this.container.querySelector('.popup__form');
        this.user = user;
        this.api = api;
    }

    open(event){
        super.open(event);
        this.form.querySelector('.popup__input_type_name').value = document.querySelector('.user-info__name').textContent;
        this.form.querySelector('.popup__input_type_about').value = document.querySelector('.user-info__job').textContent;
    }

    submit(event){
        super.submit(event);
        this.api.updateUserData(this.valueOne, this.valueTwo)
            .then((res)=>{
                if(res){
                    this.user.renderBio(res);
                    this.close();
                    this.form.removeEventListener('submit', this.bentSubmit);
                };
            })
            .catch((err)=>{
                console.log(err);
            });

    }
}
