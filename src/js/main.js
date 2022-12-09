import homePage from './pages/homePage';
import singleItem from './pages/singleItemPage';
import favouritesPage from './pages/favouritesPage';
import bidsPage from './pages/bidsPage';
import errorPage from './pages/errorPage';
import eventEmitter from './utils/EventEmitter';
import Favourites from './favourites/favModel';
import modalRender from './modal/modalView'
import * as preloader from './preloader/preloaderView'

const state = {
    results: [],
    cardsView: 'cards',
    emitter: new eventEmitter(),
    favourites: new Favourites(),

    showPreloader() {
        preloader.render()
    },

    hidePreloader() {
        preloader.remove()
    }
};

//Create event for Errors in Event Emitter:
state.emitter.subscribe( 'event:message', (args)=> {
    modalRender(args); 
});

//Only for testing
window.state = state;

//Routes
const routes = [
    { path: '/', component: homePage },
    { path: 'item', component: singleItem },
    { path: 'favourites', component: favouritesPage },
    { path: 'bids', component: bidsPage },
];

function findComponentByPath(path, routes){
    return routes.find( route => route.path === path );
}

function router() {
    //Split path to Array:
    const pathArray = location.hash.split('/');
    //Set current path:
    let currentPath = pathArray[0] === ''? '/' : pathArray[1];
    currentPath = currentPath === ''? '/' : currentPath;

    //Save route params:
    state.routeParams = pathArray[2]? pathArray[2] : '';

    //Chose matching component from roures or error Page
    const { component = errorPage } = findComponentByPath( currentPath, routes ) || {};

    component(state);
}

window.addEventListener( 'hashchange', router );
window.addEventListener( 'load', router );
