export default class EventEmitter {
    constructor() {
        this.events = {};
    }

    subscribe( eventName, eventFn ) {
        if( !this.events[eventName] ) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(eventFn);

            return () => {
                this.events[eventName] = this.events[eventName]
                .filter( fn => fn !== eventFn )
            }
        }
    
    emit( eventName, args ) {
        if( this.events[eventName] ) {
                this.events[eventName].forEach( fn => fn.call( null, args ) );
        }
    }
}