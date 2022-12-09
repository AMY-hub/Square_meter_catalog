export function renderSortPanel(view) {
    const markup = `<div class="view-options-wrapper">
                        <div class="container">
                            <!-- view-options -->
                            <div class="view-options">
                                <div class="view-options__sort">
                                    <label
                                        for="sort-cards-by"
                                        class="view-options__label"
                                        >Сортировать</label
                                    >
                                    <select
                                        id="sort-cards-by"
                                        name="sortby"
                                        class="view-options__select"
                                    >
                                        <option value="priceASC">по цене ↑</option>
                                        <option value="priceDESC">по цене ↓</option>
                                        <option value="squareASC">по площади ↑</option>
                                        <option value="squareDESC">по площади ↓</option>
                                    </select>
                                </div>
                                <div class="view-options__type">
                                    <!-- Cards -->
                                    <input
                                        type="radio"
                                        class="view-options__radio"
                                        name="displayType"
                                        id="displayCards"
                                        value="cards"
                                        ${view === 'cards'? 'checked' : ''}
                                    />
                                    <label
                                        for="displayCards"
                                        class="view-options__type-item"
                                    >
                                        <i class="fas fa-th-large"></i>
                                    </label>
                                    <!-- List -->
                                    <input
                                        type="radio"
                                        class="view-options__radio"
                                        name="displayType"
                                        id="displayList"
                                        value="list"
                                        ${view === 'list'? 'checked' : ''}
                                    />
                                    <label
                                        for="displayList"
                                        class="view-options__type-item"
                                    >
                                        <i class="fas fa-bars"></i>
                                    </label>
                                </div>
                            </div>
                            <!-- // view-options -->
                        </div>
                    </div>`;

                    document.querySelector('#app').insertAdjacentHTML('beforeend', markup)
}

export function renderContainer(view) {

    const markupForCards = `<div class="cards-wrapper">
                                <div class="container p-0">
                                    <div id ="listing-container" class="row">
                                    </div>
                                </div>
                            </div>
                        `;

    const markupForList = `
             <div class="panels-wrapper">
                <div class="container p-0" id ="listing-container">
                    <div class="panels-filter">
                        <div
                            class="panels-filter__element"
                            style="width: 120px;"
                        >
                            <div class="panels-filter__name no-filter">
                                Артикул
                            </div>
                        </div>
                        <div
                            class="panels-filter__element"
                            style="width: 160px;"
                        >
                            <div class="panels-filter__name no-filter">ЖК</div>
                        </div>
                        <div
                            class="panels-filter__element"
                            style="width: 70px;"
                        >
                            <div class="panels-filter__name no-filter">
                                Корпус
                            </div>
                        </div>
                        <div
                            class="panels-filter__element"
                            style="width: 70px;"
                        >
                            <div class="panels-filter__name no-filter">
                                Этаж
                            </div>
                        </div>
                        <div
                            class="panels-filter__element"
                            style="width: 70px;"
                        >
                            <div class="panels-filter__name no-filter">Комнат</div>
                        </div>
                        <div
                            class="panels-filter__element"
                            style="width: 80px;"
                        >
                            <div class="panels-filter__name no-filter">Площадь</div>
                        </div>
                        <div
                            class="panels-filter__element"
                            style="width: 100px;"
                        >
                            <div class="panels-filter__name no-filter">м2</div>
                        </div>
                        <div
                            class="panels-filter__element"
                            style="width: 100px;"
                        >
                            <div class="panels-filter__name no-filter">Стоимость</div>
                        </div>

                        <div
                            class="panels-filter__element"
                            style="width: 100px;"
                        >
                            <div class="panels-filter__name no-filter">
                                Избранное
                            </div>
                        </div>
                    </div>
    `;

    const markup = `
            <div id="cardsHolder"> ${view === 'cards'? markupForCards : markupForList}</div>
            `;

    document.querySelector('#app').insertAdjacentHTML('beforeend', markup);                       
};

export function renderCard(item, isFaved, cardView) {
    const listingContainer = document.querySelector('#listing-container');
    const cardFavClass = isFaved ? 'card__like card__like--active' : 'card__like';
    const markupCard = `<article class="col-md-4">
                        <!-- card -->
                        <a href="#/item/${item.id}" class="card" data-id="${item.id}">
                            <div class="card__header">
                                <div class="card__title">
                                    ЖК ${item.complex_name}
                                </div>
                                <div class="${cardFavClass}">
                                    <i class="fas fa-heart"></i>
                                </div>
                            </div>
                            <div class="card__img">
                                <img src=${item.image} alt="План квартиры" />
                            </div>
                            <div class="card__desc">
                                <div class="card__price">
                                    <div class="card__price-total">
                                        ${item.price_total} ₽
                                    </div>
                                    <div class="card__price-per-meter">
                                        ${item.price_sq_m} ₽/м2
                                    </div>
                                </div>

                                <!-- card__params params -->
                                <div class="card__params params">
                                    <div class="params__item">
                                        <div class="params__definition">
                                            Комнат
                                        </div>
                                        <div class="params__value">${item.rooms}</div>
                                    </div>
                                    <div class="params__item">
                                        <div class="params__definition">
                                            Площадь
                                        </div>
                                        <div class="params__value">${item.square}</div>
                                    </div>
                                </div>
                                <!-- //card__params params -->
                            </div>
                            <div class="card__footer">
                                <div class="card__art">${item.scu}</div>
                                <div class="card__floor">Этаж ${item.floor} из ${item.floors_total}</div>
                            </div>
                        </a>
                        <!-- // card -->
                    </article>`;
    
    const markupList = `<a href="#/item/${item.id}" class="panel" data-id="${item.id}">
                            <div class="panel__artikul">${item.scu}</div>
                            <div class="panel__name">
                                <div>ЖК ${item.complex_name}</div>
                            </div>
                            <div class="panel__block">${item.building}</div>
                            <div class="panel__floor">${item.floor}</div>
                            <div class="panel__rooms">${item.rooms}</div>
                            <div class="panel__sq">${item.square}</div>
                            <div class="panel__price-per-m">${item.price_sq_m} ₽</div>
                            <div class="panel__price"> ${item.price_total} ₽</div>
                            <div class="panel__favourite">
                                <div class="${cardFavClass}">
                                    <i class="fas fa-heart"></i>
                                </div>
                            </div>
                        </a>
    `;

    const markup = cardView === 'cards'? markupCard : markupList;

    listingContainer.insertAdjacentHTML('beforeend', markup);
};

export function clearListingContainer() {
    document.querySelector('#listing-container').innerHTML = '';
}

export function clearCardsHolder() {
        document.querySelector('#cardsHolder').remove();
}

export function toggleFavIcon( currentItem, isFaved ) {
    if (isFaved) {
        currentItem.classList.add('card__like--active');
    } else {
        currentItem.classList.remove('card__like--active');
    }
}