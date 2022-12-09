import SingleItem from "./singleItemModel";
import * as view from "./singleItemView"

export default async function(state) {
    state.singleItem = new SingleItem(state.routeParams);

    try {
       await state.singleItem.getItem(); 
    } catch(err) {
        state.emitter.emit( 'event:message', 'Ошибка!', err.message );
    }
    
    view.renderItem( state.singleItem.resultItem, state.favourites.isFav( state.singleItem.id ) );

    /************************/
    // Setup Event Listeners:
    /************************/

    //Show modal window:
    document.querySelector('.button-order').addEventListener( 'click', ()=>{
        view.showFormModal();
    });

    //Hide modal window:
    document.querySelector('#formClose').addEventListener( 'click', ()=>{
        view.hideFormModal();
    });

    // //Hide modal window on overlay:
    // document.querySelector('#formModal').addEventListener( 'click', (event)=>{
    //     if( event.target.closest('.modal') ) {
    //         return null;
    //     } else {
    //         view.hideFormModal();
    //         view.hideResultModal();
    //     }
    // });

    //Submit Bid form:
    document.querySelector('.modal__form').addEventListener( 'submit', async function(event) {
        event.preventDefault();
        const formData = view.getFormData();

        if ( ! formData.policy ) {
            alert('Для отправки заявки необходимо согласие на обработку персональных данных');
            return null;
        }

        try {
           await state.singleItem.submitForm(formData); 
        } catch (err) {
            view.hideFormModal();
            state.emitter.emit( 'event:message', ['Ошибка!', err.message] );
        }
        
        const response = state.singleItem.response;

        if ( response.message === 'Bid Created' ) {
            view.hideFormModal();
            view.clearFormFields();
            state.emitter.emit( 'event:message', ['Спасибо!', 'Ваша заявка успешно получена'] );

        } else if( response.message === 'Bid Not Created' ) {
            let message = '';
            response.errors.forEach( error => message = message + error + '<br>' );
            console.log(message);
            state.emitter.emit( 'event:message', ['Ошибка!', message] );
        }
    });

    //Add to favourites:
    document.querySelector('.button-favourite').addEventListener('click', (event)=> {
        state.favourites.toggleFavs(state.singleItem.id);
        view.toggleFavBtn( state.favourites.isFav(state.singleItem.id) )
    })

    /************************/
    // Setup Slider:
    /************************/

    const slider = {
        slides: document.querySelectorAll('.slider__photo'),
        btnPrev: document.querySelector('#btnPrev'),
        btnNext: document.querySelector('#btnNext'),
        index: 0
    }

    slider.btnNext.addEventListener('click', goNextSlide);
    slider.btnPrev.addEventListener('click', goPrevSlide);

    function setActiveSlide(n) {
        slider.slides.forEach( slide => slide.classList.add('none') );
        slider.slides[n].classList.remove('none');
    }

    function goNextSlide() {
        if( slider.index === slider.slides.length - 1 ) {
            slider.index = 0;
            setActiveSlide( slider.index );
        } else {
            slider.index ++;
            setActiveSlide( slider.index );
        }
    }

    function goPrevSlide() {
        if( slider.index === 0 ) {
            slider.index = slider.slides.length - 1;
            setActiveSlide( slider.index );
        } else {
            slider.index --;
            setActiveSlide( slider.index );
        }
    }
    
    setInterval( goNextSlide, 2000 );
}





