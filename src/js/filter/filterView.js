import 'url-search-params-polyfill';

const elements = {
    filterSelect: document.getElementsByClassName('filter__dropdown'),
    filterRooms: document.getElementsByClassName('rooms__checkbox'),
    filterFields: document.getElementsByClassName('range__input'),
    filterSubmit: document.getElementsByClassName('filter__show')
}

export function render(params) {
    let complexNames = ``;
    params.complexNames.forEach( name => {
        complexNames += `<option value="${name}">ЖК ${name}</option>`;
    });

    let rooms = ``;
    params.roomValues.forEach( room => {
        rooms += `<input
                name="rooms"
                type="checkbox"
                id="rooms_${room}"
                class="rooms__checkbox"
                value="${room}"
            /><label for="rooms_${room}" class="rooms__btn">${room}</label>`
    })

    const markup = `
    <form method="GET" id="filter-form" class="container p-0">
        <div class="heading-1">Выбор квартир:</div>
        <div class="filter">
            <div class="filter__col">
                <div class="filter__label">Выбор проекта:</div>
                <select name="complex" id="complex-select" class="filter__dropdown">
                    <option value="all">Все проекты</option>
                    ${complexNames}
                </select>
            </div>
            <div class="filter__col rooms">
                <div class="filter__label">Комнат:</div>
                <div class="rooms__wrapper">
                    ${rooms}
                </div>
            </div>
            <div class="filter__col">
                <div class="filter__label">Площадь:</div>
                <div class="range__wrapper">
                    <label class="range">
                        <div for="" class="range__label">от</div>
                        <input
                            name="sqmin"
                            min="0"
                            type="number"
                            class="range__input"
                            placeholder="38"
                        />
                        <div class="range__value">м2</div>
                    </label>
                    <label class="range">
                        <div for="" class="range__label">до</div>
                        <input
                            name="sqmax"
                            min="0"
                            type="number"
                            class="range__input"
                            value = "${params.squareMax}"
                            placeholder="${params.squareMin}"
                        />
                        <div class="range__value">м2</div>
                    </label>
                </div>
            </div>
            <div class="filter__col">
                <div class="filter__label">Стоимость:</div>
                <div class="range__wrapper">
                    <div class="range">
                        <label for="" class="range__label">от</label>
                        <input
                            type="number"
                            name="pricemin"
                            min="0"
                            class="range__input range__input--price"
                            value = "${params.priceMin}"
                            placeholder="${params.priceMin}"
                        />
                        <div class="range__value">₽</div>
                    </div>
                    <div class="range">
                        <label for="" class="range__label">до</label>
                        <input
                            type="number"
                            name="pricemax"
                            min="0"
                            class="range__input range__input--price"
                            value = "${params.priceMax}"
                            placeholder="${params.priceMax}"
                        />
                        <div class="range__value">₽</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="filter__buttons">
            <button class="filter__show">Показать 119 объектов</button>
            <button type="reset" class="filter__reset">Сбросить фильтр</button>
        </div>
    </form>

           
    `;

    document.querySelector('#app').insertAdjacentHTML('afterbegin', markup)
}

export function changeButtonText(number) {
    const btn = elements.filterSubmit[0];
    let message;

    if ( number > 0 ) {
        message = `Показать ${number} объектов`;
        btn.disabled = false;
    } else {
        message = 'Нет подходящих вариантов. Измените условия поиска.'
        btn.disabled = true;
    }
    btn.innerText = message;

}

export function getInputs() {

    const searchParams = new URLSearchParams();

    //Get select value:
    if ( elements.filterSelect[0].value !== 'all' ) {
        searchParams.append( elements.filterSelect[0].name, elements.filterSelect[0].value )
    } 

    //Get rooms checkboxes value:
    const roomValues = [];
    Array.from(elements.filterRooms).forEach( checkbox =>{
        if( checkbox.value !== '' && checkbox.checked ) {
            roomValues.push(checkbox.value)
        }
    });
    const roomValuesString = roomValues.join(',');

    if (roomValuesString !== '') {
        searchParams.append( 'rooms', roomValuesString );
    }

    //Get price and square values:
    Array.from(elements.filterFields).forEach( input => {
        if( input.value !== '') searchParams.append( input.name, input.value );
    });

    const queryString = searchParams.toString();

    if (queryString) {
        return '?' + queryString;
    } else {
        return '';
    }
}
