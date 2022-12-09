export default class Favourites {
    constructor() {
        this.favs = [];
        this.readLocalStorage();
    }

    addToFavs(id) {
        this.favs.push(id);
        this.saveToLS();
    }

    removeFromFavs(id) {
        const index = this.favs.indexOf(id);
        this.favs.splice(index, 1);
        this.saveToLS();
    }

    isFav(id) {
        return this.favs.includes(id);
    }

    toggleFavs(id) {
        this.isFav(id)? this.removeFromFavs(id) : this.addToFavs(id);
    }

    saveToLS() {
        localStorage.setItem( 'favs', JSON.stringify(this.favs) ); 
    }

    readLocalStorage(){
        const storage = JSON.parse( localStorage.getItem('favs') );
        if( storage ) {
            this.favs = storage;
        }
    }
}