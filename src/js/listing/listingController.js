import * as view from './listingView';

export default function(state) {
    view.renderSortPanel(state.cardsView);
    view.renderContainer(state.cardsView);

    sortResults( document.querySelector('#sort-cards-by').value );
    state.results.forEach( item => {
        view.renderCard( item, state.favourites.isFav(item.id), state.cardsView );
    });

    //Setup listeners for "add to favourite" icons:
    setupFavIcons();
    
    //Setup cards view toggler
    document.querySelector('#displayCards').addEventListener('change', ()=>{
        state.cardsView = 'cards';
        // view.clearListingContainer();
        view.clearCardsHolder();
        view.renderContainer(state.cardsView);
        state.results.forEach( item => {
            view.renderCard( item, state.favourites.isFav(item.id), state.cardsView );
        });
    });
    document.querySelector('#displayList').addEventListener('change', ()=>{
        state.cardsView = 'list';
        // view.clearListingContainer();
        view.clearCardsHolder();
        view.renderContainer(state.cardsView);
        state.results.forEach( item => {
            view.renderCard( item, state.favourites.isFav(item.id), state.cardsView );
        });
    })

    //Setup cards sorting:
    document.querySelector('#sort-cards-by').addEventListener('change', (event)=>{
        sortResults(event.target.value);
        view.clearCardsHolder();
        view.renderContainer(state.cardsView);
        state.results.forEach( item => {
            view.renderCard( item, state.favourites.isFav(item.id), state.cardsView );
        });
    });

    //Sorting results(from state before rendering):
    function sortResults(value) {

        if ( value === 'priceDESC' ) {
            state.results.sort( (a, b) => b.price_total - a.price_total );    
        } else if ( value === 'priceASC' ) {
            state.results.sort( (a, b) => a.price_total - b.price_total ); 
        }

        if ( value === 'squareDESC' ) {
            state.results.sort( (a, b) => b.square - a.square );     
        } else if ( value === 'squareASC' ) {
            state.results.sort( (a, b) => a.square - b.square );    
        }   
    }

    // Render filtered items:
    state.emitter.subscribe( 'event:render-listing', ()=>{
        // view.clearListingContainer();
        view.clearCardsHolder();
        view.renderContainer(state.cardsView);
        sortResults( document.querySelector('#sort-cards-by').value );
        state.results.forEach( item => {
            view.renderCard(item, state.favourites.isFav(item.id), state.cardsView );
        });

        //Setup listeners for "add to favourite" icons:
        setupFavIcons();
    });

    //Setup Favourites Icons:
    function setupFavIcons() {
            Array.from( document.getElementsByClassName('card__like') ).forEach( (item) => {
            item.addEventListener('click', (event)=> {
                event.preventDefault();

                let currentId;

                if (state.cardsView === 'cards') {
                    currentId = event.target.closest('.card').dataset.id;
                } else {
                    currentId = event.target.closest('.panel').dataset.id;
                }
                
                state.favourites.toggleFavs(currentId);

                view.toggleFavIcon( event.target.closest('.card__like'), state.favourites.isFav(currentId) );
            })
        });  
    }


}