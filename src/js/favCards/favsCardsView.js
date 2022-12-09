export function renderContainer() {
    const markup = `
    <div class="container p-0 mb-5">
        <div class="heading-1">Избранное</div>
    </div>

    <div class="view-options-wrapper">
                <div class="container p-0">
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
                    </div>
                   
                    <!-- // view-options -->
                </div>
            </div>

            <!-- cards-wrapper -->
            <div class="cards-wrapper">
                <div class="container p-0">
                    <!-- row -->
                    <div class="row" id="cardsHolder">
                    </div>
                    <!-- // row -->
                </div>
            </div>
    `;
    document.querySelector('#app').insertAdjacentHTML('afterbegin', markup);
}

export function renderCard(item) {
    const cardsContainer = document.querySelector('#cardsHolder');
    const markup = `<article class="col-md-4">
                        <!-- card -->
                        <a href="#/item/${item.id}" class="card" data-id="${item.id}">
                            <div class="card__header">
                                <div class="card__title">
                                    ЖК ${item.complex_name}
                                </div>
                                <div class="card__like card__like--active">
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

    cardsContainer.insertAdjacentHTML('beforeend', markup);
}

export function clearContainer() {
    const cardsContainer = document.querySelector('#cardsHolder');
    cardsContainer.innerHTML = '';
}

export function toggleFavIcon( currentItem, isFaved ) {
    if (isFaved) {
        currentItem.classList.add('card__like--active');
    } else {
        currentItem.classList.remove('card__like--active');
    }
}

export function noFavs() {
    const cardsContainer = document.querySelector('#cardsHolder');
    cardsContainer.innerHTML = `<div class="no-favs">Ни один товар не добавлен в избранное</div>`;
}