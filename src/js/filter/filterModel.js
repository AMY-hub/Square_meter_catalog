export default class Filter {
    constructor(){
        this.query = '';
    }

    async getParams() {
        try {
            const queryString = 'http://jsproject.webcademy.ru/itemsinfo';
            const response = await fetch(queryString);
            const data = await response.json();
            this.params = await data;  
        } catch(err) {
            throw new Error('Ошибка загрузки фильтра. Пожалуйста, попробуйте еще раз позже.');
        }
        
    }

    async getResults() {
        try{   
            let queryString = `http://jsproject.webcademy.ru/items${this.query}`;
            const response = await fetch(queryString);
            const data = await response.json();
            this.results = await data;
        } catch(err) {
            throw new Error('Ошибка загрузки данных. Пожалуйста, попробуйте еще раз позже.');
        }
    }
}