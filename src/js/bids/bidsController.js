import Bids from "./bidsModel";
import * as view from ".//bidsView";

export default async function(state) {
    if( !state.bids ) state.bids = new Bids();
    
    try{
        await state.bids.getBids();
    } catch(err) {
        state.emitter.emit( 'event:message', ['Ошибка!', err.message] );
    }
    

    view.renderBids(state.bids.bids)
}