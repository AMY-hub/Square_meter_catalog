export default class singleItem {
    constructor(id) {
        this.id = id;
    }

    async getItem() {
        try {
            const queryString = `http://jsproject.webcademy.ru/items/${this.id}`;
            const result = await fetch(queryString);
            const data = await result.json();
            this.resultItem = await data;            
        } catch(err) {
            alert(err);
            throw new Error('Ошибка получения информации об объекте. Пожалуйста, попробуйте еще раз позже.');
        }
    }

    async submitForm(formData) {
        try{
            const queryString = 'http://jsproject.webcademy.ru/bidnew';
            const response = await fetch(queryString, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json; charset=utf-8'  
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            this.response = await data;        
        } catch(err) {
            throw new Error('Ошибка отправки данных. Пожалуйста, попробуйте еще раз позже.');
        }

    }
}