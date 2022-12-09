import * as view from './filterView';
import Filter from './filterModel';

export default async function(state) {

    //Creare filter object(if doesn't exist)
    if( !state.filter ) state.filter = new Filter(); 

    try {
        //Get params for the filter
        await state.filter.getParams();

        //Render params for the filter
        view.render( state.filter.params, state.cardsView );

        //Request to server fo objects data
        await state.filter.getResults();

        //Write results data to state object
        state.results = state.filter.results;

    } catch(err) {
        state.hidePreloader();
        state.emitter.emit( 'event:message', ['Ошибка!', err.message] );
    }

    //updare Button Counter
    view.changeButtonText(state.filter.results.length);

    const form = document.getElementById('filter-form');

    form.addEventListener('change', async (event) => {
        event.preventDefault();
        state.filter.query = view.getInputs();
        await state.filter.getResults();
        state.results = state.filter.results;
        view.changeButtonText(state.filter.results.length);
    });
    
    //Filter Form Reset:
    form.addEventListener('reset', async (event) => {
        state.filter.query = '';
        await state.filter.getResults();
        state.results = state.filter.results;
        view.changeButtonText(state.filter.results.length);
    });

    //Filter Form Submit:
    form.addEventListener('submit', async (event) => {
        event.preventDefault()
        state.emitter.emit( 'event:render-listing', {} )
    });

}