import favCardsController from "../favCards/favCardsController";

export default function(state) {
    

    document.querySelector('#app').innerHTML = '';
    favCardsController(state);

   
}