import singleItem from "./../singleItem/singleItemController";

export default async function(state) {
    
    //Clear app container:
    document.querySelector('#app').innerHTML = '';
    //Run SingleItem Component:
    await singleItem(state);
    
    
}