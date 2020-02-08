class User{
    constructor(api){
        this.api = api;
    }

    renderBio(res){
        document.querySelector('.user-info__name').textContent = res.name;
        document.querySelector('.user-info__job').textContent = res.about;
    }

    renderAvatar(res){
        document.querySelector('.user-info__photo').style.backgroundImage = `url(${res.avatar})`;
    }

    applyData(){
        return this.api.loadUserData()
            .then((res)=>{
                this.renderBio(res);
                this.renderAvatar(res);
            })
            .catch((err)=>{
                console.log(err);
            });
    }

/** REVIEW: Можно лучше:
*   Мертвый код. Метод updateData не используется
**/
    updateData(newName, newBio){
        this.api.updateUserData(newName, newBio)
            .then((res) => this.renderBio(res))
            .catch((err)=>{
                console.log(err);
            });
    }
}
