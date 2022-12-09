import FavCards from "./favCardsModel";
import * as view from "./favsCardsView";

export default async function(state) {
    
    const favList = state.favourites.favs;

    const favCards = new FavCards(favList);

    try {
        const result = await favCards.getFavs(); 
        
        if ( result === null ) {
            view.renderContainer();
            view.noFavs();
            return;
        }
    } catch(err) {
        state.emitter.emit( 'event:message', ['Ошибка!', err.message] );
    }

    view.renderContainer();
    sortResults( document.querySelector('#sort-cards-by').value );
    favCards.cards.forEach( card => view.renderCard(card) );

    setupFavIcons();

    //Setup cards sorting:
    document.querySelector('#sort-cards-by').addEventListener('change', (event)=>{
        sortResults(event.target.value);
        view.clearContainer();
        
        favCards.cards.forEach( card => view.renderCard(card) );
    });

    //Sorting results:
    function sortResults(value) {
        if ( value === 'priceDESC' ) {
            favCards.cards.sort( (a, b) => b.price_total - a.price_total );    
        } else if ( value === 'priceASC' ) {
            favCards.cards.sort( (a, b) => a.price_total - b.price_total ); 
        }

        if ( value === 'squareDESC' ) {
            favCards.cards.sort( (a, b) => b.square - a.square );     
        } else if ( value === 'squareASC' ) {
            favCards.cards.sort( (a, b) => a.square - b.square );    
        }   
    }

    //Setup Favourites Icons:
    function setupFavIcons() {
        Array.from( document.getElementsByClassName('card__like') ).forEach( (item) => {
        item.addEventListener('click', (event)=> {
            event.preventDefault();
            const currentId = event.target.closest('.card').dataset.id;
            state.favourites.toggleFavs(currentId);

            view.toggleFavIcon( event.target.closest('.card__like'), state.favourites.isFav(currentId) );
        })
    });  
}

}