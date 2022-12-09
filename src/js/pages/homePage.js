import filter from "./../filter/filterController";
import listing from "./../listing/listingController";

export default async function(state) {
    state.showPreloader();

    document.querySelector('#app').innerHTML = '';
    await filter(state);
    listing(state);
    
    state.hidePreloader();
}