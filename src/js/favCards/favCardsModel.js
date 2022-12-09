
export default class FavCards {
    constructor(favList) {
        this.favList = favList;
    }

    async getFavs() {

        const ids = this.favList.toString();
        if ( !ids ) return null;

        const queryString = `http://jsproject.webcademy.ru/items?ids=${ids}`;

        try {
            const response = await fetch(queryString);
            const data = await response.json();
            this.cards = await data;            
        } catch(err) {
            throw new Error('Ошибка загрузки данных. Пожалуйста, попробуйте еще раз позже.');
        }

    }
}