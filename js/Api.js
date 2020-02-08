class Api {
    constructor(server, cohort, token){
        this.server = server;
        this.cohort = cohort;
        this.token = token;
    }

    loadUserData(){

         //вынесено
        return (fetch(`http://${this.server}/${this.cohort}/users/me`, {
            headers: {
                authorization: `${this.token}`
            }
        })
            .then((res)=>{
                if(res.ok){return res.json();}
                window.alert('Ошибка: '+ res.status);
            })
            .catch((err)=>{
                console.log(err);
            })
            );

    }

    updateUserData(newName, newBio){

         //вынесено
        return (fetch(`http://${this.server}/${this.cohort}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `${this.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: `${newName}`,
                about: `${newBio}`
            })
        })
            .then((res)=>{
                if(res.ok){return res.json()}
                window.alert('Ошибка: '+ res.status);
                return res.ok;
            })
            .catch((err)=>{
                console.log(err);
            })
        );
    }

    loadInitialCards(){
        return (fetch(`http://95.216.175.5/${this.cohort}/cards`, {
        headers: {
            authorization: `${this.token}`
        }})
        .then((res)=>{
            if(res.ok){return res.json()}
            window.alert('Ошибка: '+ res.status);
            return res.ok;
        })
        .catch((err)=>{
            console.log(err);
        })
        );
    }

}
