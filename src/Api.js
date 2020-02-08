export default class Api {
    constructor(server, cohort, token){
        this.server = server;
        this.cohort = cohort;
        this.token = token;
    }

    loadUserData(){

         //вынесено
        return (fetch(`${this.server}/users/me`, {
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
        return (fetch(`${this.server}/users/me`, {
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
        return (fetch(`${this.server}/cards`, {
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