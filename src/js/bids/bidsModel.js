export default class Bids {
    constructor(){}

    async getBids(){
        try{
            const queryString = 'http://jsproject.webcademy.ru/bids';
            const response = await fetch(queryString);
            const data = await response.json();
            this.bids = await data;          
        } catch(err) {
            throw new Error('Ошибка получения заявок. Пожалуйста, попробуйте еще раз позже.'); 
        }
    }
}